import { VerifiedUser } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const TileHeader = ({ sender, post }: any) => { 
    const [hoverVerify, setHoverVerify] = useState(false);
    return (
        <div className="sender_info" style={{ padding: 10, margin: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <img src={sender.profile_image_url} style={{ height: 40, width: 40 }} />
                    <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', marginLeft:8, position:'relative'}}>
                        {hoverVerify ? <VerifyToolTip/> : null}
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0, padding: 0, paddingBottom: 0 }}>
                            <Link href="/profile">
                                <p style={{ margin: 0, fontSize: 14, fontWeight: 500 }}>{sender.username}</p> 
                        </Link>
                        <div onMouseEnter={(e) => { setHoverVerify(true) }} onMouseLeave={(e) => { setHoverVerify(false) }} style={{paddingRight:20, paddingLeft:4, display:'flex', justifyContent:'center'}}>
                                <VerifiedUser style={{ fontSize: 18}} color='primary' />
                            </div>
                        </div>
                        <p style={{margin:0, fontSize:12}}>{new Date(post.header.timestamp).toLocaleDateString()}</p>
                    </div>
                </div>
            
        </div>
    );
}

const VerifyToolTip = () => {
    return (
        <div style={{ position: 'absolute', top:-40, right:-80, padding:'4px 20px', background:'#FFF', boxShadow:'0px 0px 2px 2px rgba(0,0,0,.05)', borderRadius:8, minWidth:'200px'}}>
            <Typography style={{fontSize:12}}>Verified since 13th Aug, 2022</Typography>
        </div>
    )
}

export default TileHeader;