import { useContext } from "react";
import { Post } from "../../dummydata/posts";
import PostContext from "../../hooks/posts-context";
import FeedTile from "./item/tile";

const Feed = () => { 
    const {posts} = useContext(PostContext);
    return (
        <div style={{ display: 'flex', flexDirection: 'row', width:'100%', justifyContent:'center'}}>
            <div>
                {posts.slice(0,3).map((post: Post, index: number) => <FeedTile key={index} post={post} />)}  
            </div>
            <div>
                {posts.slice(3.6).map((post: Post, index: number) => <FeedTile key={index} post={post} />)}  
            </div>
        </div>
    )
}

export default Feed;
