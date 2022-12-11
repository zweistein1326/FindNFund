import { TextIcon } from '../components/icons/texticon';
import Feed from '../components/feed';
import CreatePost from '../components/feed/createPost';
import Link from 'next/link';
import LeftNav from '../components/feed/leftNav';
import RightNav from '../components/feed/rightNav';
import CenterNav from '../components/feed/centerNav';
import Header from '../components/header';

const TrendingPage = () => {
  return (
        <div style={{maxHeight:'100vh', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center', paddingTop:'15vh'}}>
      {/* HEADER */}
            <Header/>
            <LeftNav />
            <CenterNav />
            <RightNav/>
        </div>
  )
}



export default TrendingPage;
