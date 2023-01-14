import Container from "../../components/container";
import CenterNav from "../../components/feed/centerNav";
import LeftNav from "../../components/feed/leftNav";
import Header from "../../components/header"
import MessageList from "../../components/messages";
import Notifications from "../../components/notifications";

const NotificationsPage = () => {
    return (
        <Container rightNav={false}>
            <Notifications/>
        </Container>)
}

export default NotificationsPage;