import { TextIcon } from '../components/icons/texticon';
import Feed from '../components/feed';
import CreatePost from '../components/feed/createPost';
import Link from 'next/link';
import LeftNav from '../components/feed/leftNav';
import RightNav from '../components/feed/rightNav';
import CenterNav from '../components/feed/centerNav';
import Header from '../components/header';
import Container from '../components/container';

const TrendingPage = () => {
  return (
      <Container>
        <Header/>
        <LeftNav />
        <CenterNav>
          <CreatePost/>
          <Feed/>
        </CenterNav>
        <RightNav/>
      </Container>
  )
}



export default TrendingPage;
