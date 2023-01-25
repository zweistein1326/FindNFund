const Like = ({likes}:any) => { 
    return (
        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <p style={{ padding: "0px 6px 0px 12px", fontSize:14}}>{likes}</p>
            <img src="/images/icons/like.svg" style={{ height: 16, width: 16 }} />
        </div>
    );
}

export default Like;