import { TextIcon } from '../components/icons/texticon';
import Feed from '../components/feed';
import CreatePost from '../components/feed/createPost';

const FeedPage = () => {
  return (
        <div style={{height:'100vh', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center'}}>
            {/* HEADER */}
            <LeftNav />
            <CenterNav />
            <RightNav/>
        </div>
  )
}

const LeftNav = () => { 

    const tabs = [
        { title: 'Home', href: '' },
        { title: 'Trending', href: '' },
    ]

    const Top = () => {
        return (
            <div style={{height:'40vh', width:'20%'}}>
                <p style={{fontSize:12}}>Feeds</p>
                {tabs.map((tab, index) => <TextIcon text={tab.title} key={index} />)}
            </div>
            
        )
    }

    const Bottom = () => {
        const tabs = [
            { title: 'Profile', href: '' },
            { title: 'Messages', href: '' },
            { title: 'Notifications', href: '' },
            { title: 'Settings', href: '' },
            { title: 'Logout', href: '' },
        ]
        return (
            <div style={{height:'50vh', width:'20%'}}>
                {tabs.map((tab, index) => <TextIcon text={tab.title} key={index} />)}
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

const RightNav = () => { 
    return (
        <div style={{height:'100vh', width:'20%', padding:'10px 60px'}}>
            <p>You might be interested in</p>
            {/* <>List of groups, user might be interested in based on behaviour</> */}
        </div>
    )
}

const CenterNav = () => { 
    return (
        <div style={{ height: '100vh', width: '60%' }}>
            <CreatePost/>
            <Feed/>
        </div>
    )
}

export default FeedPage;
