import { useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TextIcon } from "../icons/texticon"

const LeftNav = ({setIsMenuVisible = ()=>{}}:any) => { 

    const router = useRouter();
    const tabs = [
        { title: 'Home', href: '/feed' },
        { title: 'Trending', href: '/trending' },
        { title: 'Grants', href: '/grants' },
        { title: 'Profile', href: '/profile' },
        { title: 'Messages', href: '/messages' },
        { title: 'Notifications', href: '/notifications' },
    ]

    useEffect(() => {
        console.log(router.pathname);
    }, []);

    const Top = () => {
        return (
            <div style={{height:'40vh', width:'100%'}}>
                {/* <p style={{fontSize:12, paddingLeft:24}}>Feeds</p> */}
                {tabs.map((tab, index) =>
                    <div key={index} style={{backgroundColor: router.pathname===tab.href ? '#8BFFD5' : 'white', height:'50px', padding:'0px 20px', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:12}}>
                        <Link href={tab.href} onClick={()=>{setIsMenuVisible(false)}}>
                            <TextIcon text={tab.title} />
                        </Link>
                    </div>)}
            </div>
            
        )
    }

    const theme = useTheme();
    const mdOrSmaller = useMediaQuery(theme.breakpoints.down('md'));
    console.log(mdOrSmaller);

    return (
        <div style={{margin:0, paddingRight: 40, padding:'0px 0px', width:mdOrSmaller ? '80vw' : '25vw', display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
            <Top />
        </div>
    )

}

export default LeftNav;