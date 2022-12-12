import Link from "next/link"
import { useState } from "react";
import { TextIcon } from "../icons/texticon"

const LeftNav = () => { 

    const tabs = [
        { title: 'Home', href: '/feed' },
        { title: 'Trending', href: '/trending' },
    ]

    const [selectedTab, selectTab] = useState(0);

    const Top = () => {
        return (
            <div style={{height:'40vh', width:'100%'}}>
                {/* <p style={{fontSize:12, paddingLeft:24}}>Feeds</p> */}
                {tabs.map((tab, index) =>
                    <div key={index} style={{backgroundColor: selectedTab == index ? '#8BFFD5' : 'white', height:'50px', padding:'0px 20px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Link href={tab.href} onClick={() => { selectTab(index) }}>
                            <TextIcon text={tab.title} />
                        </Link>
                    </div>)}
            </div>
            
        )
    }

    const Bottom = () => {
        const tabs = [
            { title: 'Profile', href: '/profile' },
            { title: 'Messages', href: '/messages' },
            { title: 'Notifications', href: '/notifications' },
            { title: 'Settings', href: '/settings' },
            { title: 'Logout', href: '/Logout' },
        ]
        return (
            <div style={{height:'50vh', width:'100%'}}>
                {tabs.map((tab, index) =>
                    <div key={index} style={{height:'50px', padding:'0px 20px', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20,  width:'100%'}}>
                        <Link href={tab.href}>
                            <TextIcon text={tab.title} />
                        </Link>
                    </div>)}
            </div>
            
        )
    }

    return (
        <div style={{margin:0, marginRight: 40, padding:'0px 0px', width:'22%'}}>
            <Top />
            <Bottom/>
        </div>
    )

}

export default LeftNav;