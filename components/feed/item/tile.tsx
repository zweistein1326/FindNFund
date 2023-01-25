import AttachmentTile from "./attachment";
import verified from '../../images/icons/verified.svg';
import Link from "next/link";
import Follow from "./follow";
import { VerifiedUser } from "@mui/icons-material";
import { Post } from "../../../dummydata/posts";
import { users } from "../../../dummydata/users";
import Like from "./stats/like";
import Comment from "./stats/comment";
import Share from "./stats/share";
import TileHeader from "./tile-header";
import { Typography } from "@mui/material";

const FeedTile = (props: any) => {

    const post: Post = props.post;
    const sender = users[Number(post.header.sender_id)];
    console.log(post, sender);

    return (
        <div style={{ padding: '4px 8px', boxShadow: '0px 0px 4px 4px rgba(0,0,0,0.05)', borderRadius: 20, margin: '24px 12px', maxWidth: '400px' }}>
            {/* HEADER */}
            <TileHeader sender={sender} post={post} />
            {/* INFO */}
            <div>
                <Typography style={{padding:"0px 8px", fontSize:'14px'}}>{post.info.text}</Typography>
                {post.info.assets.length > 0 ? <AttachmentTile assets={post.info.assets} /> : null}
            </div>
            {/* STATS */}
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:"0px 8px", alignItems:'center', paddingBottom:12}}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Like likes={post.stats.likes} />
                    <Comment comments={post.stats.comments} />
                </div>
                <Share/>
            </div>
        </div>
    )
}

export default FeedTile;