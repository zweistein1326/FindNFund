import Container from "../../components/container";
import CenterNav from "../../components/feed/centerNav";
import LeftNav from "../../components/feed/leftNav";
import Header from "../../components/header"
import Inbox from "../../components/messages";

const Messages = () => {
    return (
        <Container>
            <Header />
            <LeftNav />
            <CenterNav>
                <Inbox />
            </CenterNav>
        </Container>
    )
}

export default Messages;