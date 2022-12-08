import { posts } from "../../dummydata/posts";
import FeedTile from "./tile";

const Feed = () => { 
    return (
        <div>
            {posts.map((feed_item: any, index: number) => <FeedTile key={index} feed_item={feed_item} />)    }      
        </div>
    )
}

export default Feed;
