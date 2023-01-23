import Link from "next/link";

const Actions = ({user}:any) => {
    return (
        <div style={{width:'22vw', display:'flex', flexDirection:'row', justifyContent:'center', padding:'0 30px', background:'white'}}>
            <img src={user.profile_image_url} style={{height:50, width:50, borderRadius:40}} />
            {/* <Link href="/login">
                <div style={{ marginRight: 12, padding: '0 40px', borderRadius: 50, border: '2px solid #0066FF' }}>
                    <p style={{ fontSize: 14 }}>Login</p>
                </div>
            </Link>
            
            <Link href="/register">
                <div style={{ marginRight: 12, padding: '0 40px', borderRadius: 50, border: '2px solid #FFF', background: '#0066FF' }}>
                    <p style={{ fontSize: 14, color: '#FFF' }}>Sign In</p>
                </div>
            </Link> */}
        </div>
    )
}

export default Actions;