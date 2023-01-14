import CenterNav from "../feed/centerNav";
import LeftNav from "../feed/leftNav";
import RightNav from "../feed/rightNav";
import Header from "../header";

const Container = ({children, rightNav=true}:any) => { 
    return (
        <div style={{ height: '100vh', maxWidth: '100vw', display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'flex-start', paddingTop: '8vh', overflow: 'hidden' }}>
            <Header />
            <LeftNav />
            <CenterNav>
                {children}
            </CenterNav>
            {rightNav ? <RightNav/> : null}
        </div>
    )
}

export default Container;