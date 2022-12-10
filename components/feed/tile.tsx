import AttachmentTile from "./attachment";
import verified from '../../images/icons/verified.svg';

const FeedTile = ({ feed_item }: any) => {
    
    console.log(feed_item);
    return (
        <div style={{ padding: '0px' , border:'1px solid black', borderRadius:20, margin:'24px 12px'}}>
            <div className="sender_info" style={{padding:10, margin:4, display:'flex', flexDirection:'row', alignItems:'center'}}>
                <img src={feed_item.sender.image.url} style={{ height: 40, width: 40}} />
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', marginLeft:8}}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0, padding: 0}}>
                        <p style={{ marginRight:4, margin:2}}>{feed_item.sender.name}</p> 
                        <img src={"/images/icons/verified.svg"} style={{height:16, width:16}} />
                    </div>
                    <p style={{margin:0, fontSize:12}}>{feed_item.header.timestamp}</p>
                    {/* <p>{feed_item.sender.username}</p> */}
                </div>
            </div>
            <div>
                <p style={{padding:"0px 8px"}}>{feed_item.info.caption}</p>
                {feed_item.info.attachments.length > 0 ? feed_item.info.attachments.map((attachment: any, index: number) => <AttachmentTile attachment={attachment} key={index} />) : null }
                {/* List of attachments in post */}
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:"0px 8px"}}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                            <p style={{ padding: "0px 6px 0px 12px" }}>{feed_item.stats.likes}</p>
                            <img src="/images/icons/like.svg" style={{ height: 24, width: 24 }} />
                        </div>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                            <p style={{padding:"0px 6px 0px 12px"}}>{feed_item.stats.comments} </p>
                            <img src="/images/icons/comment.svg" style={{ height: 24, width: 24 }} />
                        </div>
                        
                    </div>
                    <p style={{padding:"0px 12px 12px 0px"}}>Share</p>
                </div>
            </div>
            
        </div>
    )
}

export default FeedTile;