import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { posts as newsFeedItems} from '../dummydata/posts'
import { useState } from 'react';
import PostContext from '../hooks/posts-context';
import ModalContext from '../hooks/modal-context';
import Modal from '../components/modal';

export default function App({ Component, pageProps }: AppProps) {
  const [posts, setPosts] = useState(newsFeedItems);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({isVerified:false});
  return (
    <PostContext.Provider value={{
      posts: posts,
      addPost: (post: any)=>{setPosts([post, ...posts])},
      updatePost: () => { }
    }}>
      <ModalContext.Provider value={{
        isModalVisible: isModalVisible,
        modalInfo: modalInfo,
        toggleModal: () => { setIsModalVisible(!isModalVisible) },
        setModalInfo: (modalInfo: any) => {setModalInfo(modalInfo)}
      }}>
        {isModalVisible ? <Modal /> : null}
        <Component {...pageProps} />
      </ModalContext.Provider>
    </PostContext.Provider>
  )
}
