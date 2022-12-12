import Container from "../../components/container";
import CenterNav from "../../components/feed/centerNav";
import LeftNav from "../../components/feed/leftNav";
import Header from "../../components/header"
import MessageList from "../../components/messages/list";

const Messages = () => {
    return (
        <Container>
            <Header />
            <LeftNav />
            <CenterNav>
                <MessageList />
            </CenterNav>
        </Container>
    )
}

export default Messages;