import { posts } from "../../dummydata/posts";
import FeedTile from "../feed/tile";

const ProfileBody = () => { 
    return (
        <div>
            <div style={{marginTop:48}}>
                <h2>About</h2>  
                <p>Rani, Rekha and Vishnu have showed excellent caliber in science and technology. We have decided to enroll them. Read more</p>
            </div>
            <div style={{marginTop:48}}>
                <h2>Members</h2>  
                
                <div style={{display:'flex', flexDirection:'row'}}>
                    {[1, 2, 3].map((value: number, index: number) => <div key={index} style={{ height: 40, width: 40, borderRadius: 60, background: 'gray', marginRight:20}}></div>)}
                </div>
            </div>
            <div style={{marginTop:48}}>
                <h2>Recent posts</h2>  
                <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'flex-start'}}>
                    <div>
                        {posts.slice(0,3).map((feed_item: any, index: number) => <FeedTile key={index} feed_item={feed_item} />)}  
                    </div>
                    <div>
                        {posts.slice(3.6).map((feed_item: any, index: number) => <FeedTile key={index} feed_item={feed_item} />)}  
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileBody;