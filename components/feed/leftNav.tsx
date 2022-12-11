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
                <p style={{fontSize:12}}>Feeds</p>
                {tabs.map((tab, index) =>
                    <div key={index} style={{borderRadius:40, backgroundColor: selectedTab == index ? '#8BFFD5' : 'white', height:'50px', padding:'0px 8px', display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
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
                    <div key={index} style={{borderRadius:40, height:'50px', padding:'0px 8px', display:'flex', alignItems:'center', justifyContent:'flex-start', marginBottom:20}}>
                        <Link href={tab.href}>
                            <TextIcon text={tab.title} />
                        </Link>
                    </div>)}
            </div>
            
        )
    }

    return (
        <div style={{width:'20vw', padding:'0px 80px'}}>
            <Top />
            <Bottom/>
        </div>
    )

}

export default LeftNav;