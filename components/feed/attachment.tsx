const AttachmentTile = ({ attachment }: any) => { 
    return (
        <div style={{height:'100%', width:'100%'}}>
            <img src={attachment.uri} style={{height:'260px', width:'398px'}} />
        </div>
    );
};

export default AttachmentTile;