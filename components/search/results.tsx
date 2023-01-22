import { VerifiedUser } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { users } from "../../dummydata/users";
import FeedTile from "../feed/tile";
import { posts } from "../../dummydata/posts";

const SearchResults = () => {
    return (
        <div style={{width:'100%'}}>
            <SearchHeader />
            <Results/>
        </div>
    )
}

const SearchHeader = () => {
    const searchFIelds = ['Nonprofits', 'People', 'Posts']
    return (
        <div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:20}}>
                {searchFIelds.map((field, index) => <div key={index} style={{ padding: '10px 30px', margin: '4px', backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 30 }}><Typography>{field}</Typography></div>)}
                <div style={{ padding: '10px 30px', margin: '4px', backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 30 }}><Typography>All Filters</Typography></div>
            </div>
        </div>
    )
}

const Results = () => {
    const user = users[0];
    const people = [
        {
            name: 'Pravin Bhasin',
            organization: 'Books for All, India',
            role: 'Founder & President',
            followers:'5K',
            profile_image_url:'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Lata Agarwal',
            organization: 'Books for All, India',
            role: 'Volunteer',
            followers:'8K',
            profile_image_url:'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Priti Chetan',
            organization: 'Books for All, India',
            role: 'Volunteer',
            followers: '4K',
            profile_image_url:'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
        }
    ]
    return (
        <div style={{width:'100%', paddingBottom:'40px'}}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 20 }}>
                <div style={{ padding: '20px 30px', margin: '4px', backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 8 }}>
                    <Typography style={{fontSize:20, fontWeight:600}}>Nonprofits</Typography>
                    <div style={{margin:'20px 0', display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                        <img src={user.profile_image_url} style={{ height: 60, width: 60}} />
                        <div style={{ margin: '0px 10px' }}>
                            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                <Typography style={{fontWeight:500}}>{user.username}</Typography>
                                <VerifiedUser style={{ fontSize:18, marginLeft:4 }} color='primary' />
                            </div>
                            <Typography style={{fontSize:14, fontWeight:400, color:'#777'}}>Education, Literacy, Employment</Typography>
                            <Typography style={{fontSize:14, fontWeight:400, color:'#777'}}>20K followers</Typography>
                            <Typography style={{fontSize:14, fontWeight:400, color:'#555'}}><span style={{fontWeight:600, color:'#000'}}>Books for All</span>{user.about?.slice(13,252)} ...</Typography>
                        </div>
                        <div style={{ padding: '8px 30px', margin: '4px', backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 30 }}>
                            <Typography>Follow</Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 20, flex:1}}>
                <div style={{ padding: '20px 30px', margin: '4px', backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 8, background:'#FFF', width:'100%'}}>
                    <Typography style={{fontSize:20, fontWeight:600}}>Posts</Typography>
                    <div style={{margin:'20px 0', display:'flex', flexDirection:'row', alignItems:'flex-start', justifyContent:'center', width:'100%'}}>
                        {posts.slice(0,2).map((feed_item: any, index: number) => <FeedTile key={index} feed_item={feed_item} />)} 
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 20, flex:1}}>
                <div style={{ padding: '20px 30px', margin: '4px', backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 8, width:'100%'}}>
                    <Typography style={{fontSize:20, fontWeight:600}}>People</Typography>
                    {people.map((person, index) => <PeopleTile person={person} key={index} />)}
                </div>
            </div>
        </div>
    )
}

const PeopleTile = ({person}:any) => {
    console.log(person)
    return (
        <div style={{margin:'20px 0', display:'flex', flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between', width:'100%'}}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                <img src={person.profile_image_url} style={{ height: 60, width: 60, borderRadius:40}} />
                <div style={{ margin: '0px 10px' }}>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Typography style={{fontWeight:500}}>{person.name}</Typography>
                        {/* <VerifiedUser style={{ fontSize:18, marginLeft:4 }} color='primary' /> */}
                    </div>
                    <Typography style={{fontSize:14, fontWeight:400, color:'#777'}}>Founder & President</Typography>
                    <Typography style={{fontSize:14, fontWeight:400, color:'#777'}}>Books for All, India</Typography>
                    <Typography style={{fontSize:14, fontWeight:400, color:'#777'}}>20K followers</Typography>
                    {/* <Typography style={{fontSize:14, fontWeight:400, color:'#555'}}><span style={{fontWeight:600, color:'#000'}}>Pravin Bhasin</span>{user.about?.slice(13,252)} ...</Typography> */}
                </div>
            </div>
            <div style={{ padding: '8px 30px', margin: '4px', backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 30 }}>
                <Typography>Follow</Typography>
            </div>
        </div>
    )
}

export default SearchResults;