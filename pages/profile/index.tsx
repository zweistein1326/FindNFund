import Container from "../../components/container";
import CenterNav from "../../components/feed/centerNav";
import LeftNav from "../../components/feed/leftNav";
import RightNav from "../../components/feed/rightNav";
import Header from "../../components/header";
import ProfileBody from "../../components/profile/body";
import ProfileHeader from "../../components/profile/header";

const Profile = () => { 
    return (
        <Container>
            <Header />
            <LeftNav />
            <CenterNav>
                <ProfileHeader />
                <ProfileBody/>
            </CenterNav>
            <RightNav/>
        </Container>
    )
}

export default Profile;