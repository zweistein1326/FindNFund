const ProfileHeader = () => { 
    return (
        <div style={{height:'30vh', width:'920px', backgroundColor:'red', position:'relative', zIndex:1}}>
            <img style={{ height: '100%', width: '100%' }} src="/images/india_children_2.png" />
            <div style={{position: 'absolute', bottom: 20, left: 20, display:'flex', flexDirection:'row',}}>
                <img style={{ backgroundColor: 'white', borderRadius: 200, height: '80px', width: '80px' }} src="/images/profile_image/ngo1.png" />
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', marginLeft:12}}>
                    <p style={{color:'white', margin:0, paddingBottom:8}}>Books for all</p>
                    <p style={{ color: 'white', margin:0, paddingBottom:8}}>New Delhi, India</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;