import Feed from '../components/feed';
import CreatePost from '../components/feed/createPost';
import Container from '../components/container';
import GrantList from '../components/grants/list';
import GrantInfo from '../components/grants/info';
import { useState } from 'react';

// TODO: Add filter by location and industry filters

const FeedPage = () => {
    const grants = [
        {
            title: 'ALDI - New frontier grant',
            organization: 'ALDI',
            range: 'USD100-500',
            created: '2d ago',
            organizationAbout: 'Aldi is passionate about making a positive impact in their local communities. So whether your mission is to support kids through education, arts, athletics or any other program that inspires them to be active and healthy, ALDI says kudos to you and encourages you to apply for support from the ALDI Smart Kids program.',
            eligible: [
                'Aldi is passionate about making a positive impact in their local',
                'communities. So whether your mission is to support kids through ',
                'education, arts, athletics or any other program that inspires them to be ',
                'active and healthy, ALDI says kudos to you and encourages you to apply ',
                'for support from the ALDI Smart Kids program.',
                ]
        },
        {
            title: 'Barney Family Foundation Grant',
            organization: 'Barney Family Foundation',
            range: 'USD500-50000',
            created:'2d ago',
            organizationAbout: 'Aldi is passionate about making a positive impact in their local communities. So whether your mission is to support kids through education, arts, athletics or any other program that inspires them to be active and healthy, ALDI says kudos to you and encourages you to apply for support from the ALDI Smart Kids program.',
            eligible: [
                'Aldi is passionate about making a positive impact in their local',
                'communities. So whether your mission is to support kids through ',
                'education, arts, athletics or any other program that inspires them to be ',
                'active and healthy, ALDI says kudos to you and encourages you to apply ',
                'for support from the ALDI Smart Kids program.',
                ]
        },
        {
            title: 'ALDI - New frontier grant',
            organization: 'ALDI',
            range: 'USD100-500',
            created:'2d ago',
            organizationAbout: 'Aldi is passionate about making a positive impact in their local communities. So whether your mission is to support kids through education, arts, athletics or any other program that inspires them to be active and healthy, ALDI says kudos to you and encourages you to apply for support from the ALDI Smart Kids program.',
            eligible: [
                'Aldi is passionate about making a positive impact in their local',
                'communities. So whether your mission is to support kids through ',
                'education, arts, athletics or any other program that inspires them to be ',
                'active and healthy, ALDI says kudos to you and encourages you to apply ',
                'for support from the ALDI Smart Kids program.',
                ]
        },
    ]
    const [selectedGrant, selectGrant] = useState(grants[0]);
  return (
        <Container rightNav={false}>
            <div style={{width:'100%', display:'flex', flexDirection:'row', height:'100%', justifyContent:'space-between', paddingRight:0}}>
                <GrantList grants={grants} selectGrant={selectGrant} />
                <GrantInfo selectedGrant={selectedGrant} />
            </div>
        </Container>
  )
}
export default FeedPage;
