import { posts } from "../../dummydata/posts";

const RightNav = () => { 
    return (
        <div style={{height:'100vh', width:'20%', padding:'10px 60px'}}>
            <p>You might be interested in</p>
            {/* <>List of groups, user might be interested in based on behaviour</> */}
            {posts.map((post, index) => <p key={ index }>{post.sender.name}</p>)}
        </div>
    )
}

export default RightNav;