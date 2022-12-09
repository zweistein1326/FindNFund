const AttachmentTile = ({attachment} : any) => { 
    return (
        <div style={{height:'100%', width:'100%'}}>
            <img src={attachment.url} style={{height:'30%', width:'30%'}} />
        </div>
    );
};

export default AttachmentTile;