import AttachmentTile from "./attachment";
import verified from '../../images/icons/verified.svg';
import Link from "next/link";
import Follow from "./follow";
import PostActions from "./postActions";

const FeedTile = ({ feed_item }: any) => {
    
    console.log(feed_item);
    return (
        <div style={{ padding: '4px 8px' , boxShadow:'0px 0px 4px 4px rgba(0,0,0,0.05)', borderRadius:20, margin:'24px 12px', maxWidth:'400px'}}>
            <div className="sender_info" style={{ padding: 10, margin: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/profile">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <img src={feed_item.sender.image.url} style={{ height: 40, width: 40}} />
                        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', marginLeft:8}}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0, padding: 0, paddingBottom:0}}>
                                <p style={{ marginLeft:0, marginRight:8, margin:2, fontSize:14, fontWeight:500}}>{feed_item.sender.name}</p> 
                                <img src={"/images/icons/verified.svg"} style={{height:16, width:16}} />
                            </div>
                            <p style={{margin:0, fontSize:12}}>{feed_item.header.timestamp}</p>
                            {/* <p>{feed_item.sender.username}</p> */}
                        </div>
                    </div>
                </Link>
                <PostActions/>
                {/* <Follow/> */}
            </div>
            <div>
                <p style={{padding:"0px 8px"}}>{feed_item.info.caption}</p>
                {feed_item.info.attachments.length > 0 ? feed_item.info.attachments.map((attachment: any, index: number) => <AttachmentTile attachment={attachment} key={index} />) : null }
                {/* List of attachments in post */}
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:"0px 8px", alignItems:'center', paddingBottom:12}}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                            <p style={{ padding: "0px 6px 0px 12px", fontSize:14}}>{feed_item.stats.likes}</p>
                            <img src="/images/icons/like.svg" style={{ height: 16, width: 16 }} />
                        </div>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                            <p style={{padding:"0px 6px 0px 12px", fontSize:14}}>{feed_item.stats.comments} </p>
                            <img src="/images/icons/comment.svg" style={{ height: 16, width: 16 }} />
                        </div>
                        
                    </div>
                    <img src="/images/icons/share.svg" style={{ height: 16, width: 16}} />
                </div>
            </div>
            
        </div>
    )
}

export default FeedTile;