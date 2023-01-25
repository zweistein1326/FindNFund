import { VerifiedUser } from "@mui/icons-material";
import { Button, Input, Radio, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { posts } from "../../dummydata/posts";
import { users } from "../../dummydata/users";

const RightNav = () => { 

    // TODO: Render right nav based on page
    const router = useRouter();

    useEffect(() => {
        
    }, [
        router.isReady
    ]);

    return (
        router.pathname == '/feed'  ? <div style={{ height: '100vh', width: '22%', padding: '40px 40px', overflowY:'scroll', paddingBottom:120}}>
            <Fundraisers />
            <Who2Follow />
        </div> : <div style={{ height: '100vh', width: '22%', padding: '40px 40px', overflowY:'scroll', paddingBottom:120}}>
            <Filters />
            <Fundraisers />
        </div>
    )
}

const Who2Follow = () => {

    const FollowTile = ({user}: any) => {
        return (
            <div style={{padding:'8px 0', marginRight:12, display:'flex', flexDirection:'row'}}>
                <img src={user.profile_image_url} style={{ height: 30, width: 30 }} />
                <div style={{ margin: '0 12px'}}>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Typography style={{ fontWeight: 600, fontSize: 14, width:'180px'}}>
                            {user.name}
                            <VerifiedUser color='primary' style={{ fontSize: 16, marginLeft:4}} />
                        </Typography>
                    </div>
                    <Typography style={{ fontWeight: 400, fontSize: 12, marginRight: 4 }}>@{user.username} | {user.followers} followers</Typography>
                </div>
                <Button style={{backgroundColor:'#0066FF', height:40, flex:1, borderRadius:20, padding:'8px 12px', color:'#FFF', fontSize:14, textTransform:'capitalize'}}>Follow</Button>
            </div>
        )
    }
    return (
        <div style={{ width: '100%' }}>
            <Typography variant="h6" style={{padding:'12px 0', fontWeight:'bold'}}>Who to follow?</Typography>
            {users.map((user, index) => <FollowTile user={user} key={index} />)}
        </div>
    )
}

const Filters = () => {
    return (
        <div style={{ width: '100%', marginBottom:20}}>
            <Typography variant="h6" style={{padding:'12px 0', fontWeight:'bold'}}>Filter posts by</Typography>
            <div style={{marginTop:8}}>
                <Typography style={{ margin: '8px 0', fontWeight:600}}>Topic</Typography>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio />
                        <Typography>All</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio />
                        <Typography>Education</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio />
                        <Typography>Elderly care</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio />
                        <Typography>Covid-19 relief</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio />
                        <Typography>Animal Welfare</Typography>
                    </div>
                </div>
                <Typography style={{ margin: '8px 0', fontWeight:600 }}>Location</Typography>
                <div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}><Radio/><Typography>Near you</Typography></div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}><Radio/><Typography>Anywhere</Typography></div>
                </div>
            </div>
        </div>
    )
}

const Fundraisers = () => {

    const TrendingItem = ({item}: any) => { 
        const randomNum = Math.floor(Math.random() * 3);
        return (
            <div style={{padding:'8px 0', marginRight:12, display:'flex', flexDirection:'row',}}>
                <img src={users[randomNum].profile_image_url} style={{ height: 30, width: 30 }} />
                <div style={{ margin: '0 12px' }}>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:6}}>
                        <Typography style={{ fontWeight: 600, fontSize: 14, marginRight: 4}}>{users[randomNum].name}</Typography>
                        <VerifiedUser color='primary' style={{fontSize:16}} />
                    </div>
                    <Typography style={{fontWeight:400, fontSize:16}}>{item}</Typography>
                </div>
            </div>
        )
    }

    const trending = ['Save 40 blind girls from becoming homeless', 'Rescue girls kidnapped and sold into brothels', 'Safe infant orphans with urgent life-saving care', 'Rescue young girls from sex trafficiking and forced prostitution', 'Covid-19 Relief'];

    return (
        <div style={{ width: '100%', marginBottom: 20 }}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingRight:40}}>
                <Typography variant="h6" style={{ padding: '12px 0', fontWeight: 'bold' }}>Ongoing Fundraisers</Typography>
                <Typography variant="h6" style={{ padding: '12px 0', fontWeight: 'bold', fontSize:14, color:'#0066FF'}}>More ></Typography>
            </div>
            {/* <>List of groups, user might be interested in based on behaviour</> */}
            {trending.map((item, index) => {
                return (<TrendingItem item={item} key={index} />);
            })}
        </div>
    )
}

export default RightNav;