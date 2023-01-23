import AttachmentTile from "./attachment";
import verified from '../../images/icons/verified.svg';
import Link from "next/link";
import Follow from "./follow";
import PostActions from "./postActions";
import { VerifiedUser } from "@mui/icons-material";
import { Post } from "../../dummydata/posts";
import { users } from "../../dummydata/users";

const FeedTile = (props: any) => {

    const post: Post = props.post;
    const sender = users[Number(post.header.sender_id)];
    console.log(post, sender);

    return (
        <div style={{ padding: '4px 8px', boxShadow: '0px 0px 4px 4px rgba(0,0,0,0.05)', borderRadius: 20, margin: '24px 12px', maxWidth: '400px' }}>
            {/* HEADER */}
            <div className="sender_info" style={{ padding: 10, margin: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/profile">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <img src={sender.profile_image_url} style={{ height: 40, width: 40}} />
                        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', marginLeft:8}}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0, padding: 0, paddingBottom:0}}>
                                <p style={{ margin:0, fontSize:14, fontWeight:500}}>{sender.username}</p> 
                                <VerifiedUser style={{fontSize:18, marginLeft:4}} color='primary'/>
                            </div>
                            <p style={{margin:0, fontSize:12}}>{new Date(post.header.timestamp).toLocaleDateString()}</p>
                        </div>
                    </div>
                </Link>
            </div>
            {/* INFO */}
            <div>
                <p style={{padding:"0px 8px"}}>{post.info.text}</p>
                {post.info.assets.length > 0 ? <AttachmentTile assets={post.info.assets} /> : null}
            </div>
            {/* STATS */}
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:"0px 8px", alignItems:'center', paddingBottom:12}}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <p style={{ padding: "0px 6px 0px 12px", fontSize:14}}>{post.stats.likes}</p>
                        <img src="/images/icons/like.svg" style={{ height: 16, width: 16 }} />
                    </div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <p style={{padding:"0px 6px 0px 12px", fontSize:14}}>{post.stats.comments} </p>
                        <img src="/images/icons/comment.svg" style={{ height: 16, width: 16 }} />
                    </div>
                </div>
                <img src="/images/icons/share.svg" style={{ height: 16, width: 16}} />
            </div>
        </div>
    )
}

export default FeedTile;