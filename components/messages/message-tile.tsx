const MessageTile = ({type, message}:any) => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: type=="incoming"? 'flex-start': 'flex-end', margin:8}}>
        <div style={{width:'60%', backgroundColor:type=="incoming"?'#8BFFD5':'#0066FF', padding:"2px 8px", borderRadius:8}}>
            <p> {message}</p>
        </div>
        </div>
    )
 }

export default MessageTile;