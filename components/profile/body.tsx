import { posts } from "../../dummydata/posts";
import { users } from "../../dummydata/users";
import FeedTile from "../feed/tile";

const ProfileBody = () => { 
    const dummy_members = ['https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];
    return (
        <div style={{width:'100%', padding:'0px 20px',}}>
            <div style={{marginTop:24}}>
                <h2>About</h2>  
                <p style={{lineHeight:1.3}}>{users[0].about}</p>
            </div>
            <div style={{marginTop:24}}>
                <h2>Members</h2>  
                
                <div style={{display:'flex', flexDirection:'row'}}>
                    {dummy_members.map((value: string, index: number) => <img alt="member" src={value} key={index} style={{ height: 40, width: 40, borderRadius: 60, background: 'gray', marginRight:20}}/>)}
                </div>
            </div>
            <div style={{margin:"24px 0"}}>
                <h2>Activity</h2>  
                <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-around', alignItems:'flex-start'}}>
                    <div>
                        {posts.slice(0,3).map((post: any, index: number) => <FeedTile key={index} post={post} />)}  
                    </div>
                    <div>
                        {posts.slice(3.6).map((post: any, index: number) => <FeedTile key={index} post={post} />)}  
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileBody;