import Link from "next/link";
import Actions from "./actions";
import Searchbar from "./searchbar";

const Header = () => { 

    return (
        <div style={{ position: 'fixed', display: 'flex', flexDirection: 'row', height: '8vh', width: '100vw', top: 0, alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid black', backgroundColor:'white'}}>
            
            <Link href="/feed" style={{}}>
                <p style={{ paddingLeft: '80px' }}>FindnFund</p>
            </Link>
            {/* Searchbar */}
            <Searchbar/>
            {/* Login/Logged In icons*/}
            <Actions/>
        </div>
    )
}

export default Header;