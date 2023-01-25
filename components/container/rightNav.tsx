import { posts } from "../../dummydata/posts";
import { users } from "../../dummydata/users";

const RightNav = () => { 
    return (
        <div style={{height:'100vh', width:'22%', padding:'40px 60px'}}>
            <h3>Groups that might interest you</h3>
            {/* <>List of groups, user might be interested in based on behaviour</> */}
            {users.map((user, index) => <div key={index} style={{display:'flex', flexDirection:'row', margin:"20px 0", alignItems:'flex-start'}}>
                <img src={user.profile_image_url} style={{height:40, width: 40, marginRight:12}} />
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                    <p style={{margin:0, paddingBottom:12}}>{user.username}</p>
                    <p style={{margin:0, paddingBottom:12}}>#Education</p>
                </div>
            </div>)}
        </div>
    )
}

export default RightNav;