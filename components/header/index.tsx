import Link from "next/link";
import { users } from "../../dummydata/users";
import Actions from "./actions";
import Searchbar from "./searchbar";

const Header = () => { 

    return (
        <div style={{ position: 'fixed', display: 'flex', flexDirection: 'row', height: '8vh', width: '100vw', top: 0, alignItems: 'center', justifyContent: 'space-between', boxShadow:'0px 0px 4px 4px rgba(0,0,0,0.05)', backgroundColor:'white', borderBottomLeftRadius:  0, borderBottomRightRadius: 0, zIndex:99999999}}>
            <Link href="/feed" style={{width:'16.5%', textAlign:'center'}}>
                <p style={{ paddingLeft: '80px' }}>FindnFund</p>
            </Link>
            {/* Searchbar */}
            <Searchbar/>
            {/* Login/Logged In icons*/}
            <Actions user={users[0]} />
        </div>
    )
}

export default Header;