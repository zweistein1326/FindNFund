import { TextIcon } from '../components/icons/texticon';
import Feed from '../components/feed';
import CreatePost from '../components/feed/createPost';
import Link from 'next/link';
import LeftNav from '../components/feed/leftNav';
import CenterNav from '../components/feed/centerNav';
import RightNav from '../components/feed/rightNav';
import Header from '../components/header';

const FeedPage = () => {
  return (
        <div style={{height:'100vh', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center', paddingTop:'10vh'}}>
      {/* HEADER */}
            <Header/>
            <LeftNav />
            <CenterNav />
            <RightNav />
        </div>
  )
}
export default FeedPage;
