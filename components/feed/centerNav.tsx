import Feed from ".";
import CreatePost from "./createPost";

const CenterNav = ({children}:any) => { 
    return (
        <div style={{ maxHeight: '100vh', width: '60vw', overflow:'scroll', paddingBottom:200, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', boxShadow:'0px 0px 4px 4px rgba(0,0,0,0.05)'}}>
            {children}
        </div>
    )
}

export default CenterNav;