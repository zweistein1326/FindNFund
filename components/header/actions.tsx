import { Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Actions = ({ user }: any) => {
    const activeUser = user;
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    return (
        <div style={{width:'22vw', display:'flex', flexDirection:'row', justifyContent:'flex-start', padding:'0 30px', background:'white'}}>
            {/* Add google with login option here */}
            {isUserLoggedIn ? <ActiveActions activeUser={activeUser}/> : <InactiveActions />}
        </div>
    )
}

const ActiveActions = ({ activeUser }: any) => { 
    
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    return (
        <div style={{ position:'relative'}}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor:'pointer'}} onClick={()=>{setIsDropdownActive(!isDropdownActive)}}>
                <img src={activeUser.profile_image_url} style={{ height: 40, width: 40, borderRadius: 40, marginRight:4}} />
                <Typography>{activeUser.name}</Typography>
            </div>
            {isDropdownActive ? <Dropdown/> : null}
        </div>
    )
}

const InactiveActions = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Link href="/login">
                <div style={{ marginRight: 12, padding: '9px 40px', borderRadius: 50, border: '2px solid #0066FF' }}>
                    <Typography style={{ fontSize: 14 }}>Login</Typography>
                </div>
            </Link>
        
            <Link href="/register">
            <div style={{ marginRight: 12, padding: '10px 40px', borderRadius: 50, border: '2px solid #FFF', background: '#0066FF' }}>
                <Typography style={{ fontSize: 14, color: '#FFF' }}>Sign In</Typography>
            </div>
            </Link>
        </div>
    )
}

const Dropdown = () => {
    const router = useRouter();
    return (
        <div style={{position:'absolute', width:'240px', padding: '12px 20px', boxShadow: '0px 0px 4px 4px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderRadius:8, marginTop:12, zIndex:9999, background:'#FFF' }}>
            <div style={{padding:'12px 0'}}>
                <Typography>Switch to another account</Typography>
            </div>
            <div style={{ padding: '12px 0' }} onClick={() => {
                // set Logged in user == null
            }}>
                <Typography>Logout</Typography>
            </div>
        </div>
    )
}


export default Actions;