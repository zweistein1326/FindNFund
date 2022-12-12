import Link from "next/link";

const Actions = () => {
    return (
        <div style={{width:'20vw', display:'flex', flexDirection:'row'}}>
            
            <Link href="/login">
                <div style={{ marginRight: 12, padding: '0 40px', borderRadius: 50, border: '2px solid #0066FF' }}>
                    <p style={{ fontSize: 14 }}>Login</p>
                </div>
            </Link>
            
            <Link href="/register">
                <div style={{ marginRight: 12, padding: '0 40px', borderRadius: 50, border: '2px solid #FFF', background: '#0066FF' }}>
                    <p style={{ fontSize: 14, color: '#FFF' }}>Sign In</p>
                </div>
            </Link>
        </div>
    )
}

export default Actions;