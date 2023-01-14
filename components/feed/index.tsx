import { posts } from "../../dummydata/posts";
import FeedTile from "./tile";

const Feed = () => { 
    return (
        <div style={{ display: 'flex', flexDirection: 'row', width:'100%', justifyContent:'center'}}>
            <div>
                {posts.slice(0,3).map((feed_item: any, index: number) => <FeedTile key={index} feed_item={feed_item} />)}  
            </div>
            <div>
                {posts.slice(3.6).map((feed_item: any, index: number) => <FeedTile key={index} feed_item={feed_item} />)}  
            </div>
        </div>
    )
}

export default Feed;
