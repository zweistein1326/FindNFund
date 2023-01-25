import { TextIcon } from '../../components/icons/texticon';
import Feed from '../../components/feed';
import CreatePost from '../../components/feed/createPost';
import Link from 'next/link';
import LeftNav from '../../components/container/leftNav';
import CenterNav from '../../components/container/centerNav';
import RightNav from '../../components/container/rightNav';
import Header from '../../components/header';
import Container from '../../components/container';

const FeedPage = () => {
  return (
        <Container>
            <CreatePost/>
            <Feed/>
        </Container>
  )
}
export default FeedPage;
