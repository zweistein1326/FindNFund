import Feed from ".";
import CreatePost from "./createPost";

const CenterNav = () => { 
    return (
        <div style={{ maxHeight: '100vh', width: '60%', overflow:'scroll'}}>
            <CreatePost/>
            <Feed/>
        </div>
    )
}

export default CenterNav;