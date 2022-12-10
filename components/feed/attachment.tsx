const AttachmentTile = ({ attachment }: any) => { 
    return (
        <div style={{height:'100%', width:'100%'}}>
            <img src={attachment.uri} style={{height:'200px', width:'300px'}} />
        </div>
    );
};

export default AttachmentTile;