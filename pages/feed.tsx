import { TextIcon } from '../components/icons/texticon';
import Feed from '../components/feed';
import CreatePost from '../components/feed/createPost';
import Link from 'next/link';
import LeftNav from '../components/feed/leftNav';
import CenterNav from '../components/feed/centerNav';
import RightNav from '../components/feed/rightNav';
import Header from '../components/header';
import Container from '../components/container';

const FeedPage = () => {
  return (
        <Container>
            <CreatePost/>
            <Feed/>
        </Container>
  )
}
export default FeedPage;
