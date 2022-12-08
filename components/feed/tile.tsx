const FeedTile = ({feed_item}:any) => {
    return (
        <div style={{ padding: '10px 60px' , border:'1px solid black'}}>
            <p>{ feed_item.info.caption }</p>
            {/* List of attachments in post */}
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <p style={{padding:"0px 12px 12px 0px"}}>{ feed_item.stats.likes } Likes</p>
                    <p style={{padding:"0px 12px 12px 0px"}}>{feed_item.stats.comments} Comments</p>
                </div>
                <p style={{padding:"0px 12px 12px 0px"}}>Share</p>
            </div>
            
        </div>
    )
}

export default FeedTile;