import Feed from ".";
import CreatePost from "./createPost";

const CenterNav = ({children}:any) => { 
    return (
        <div style={{ maxHeight: '100vh', maxWidth:'70vw', flex:1, overflowY:'scroll', overflowX:'hidden', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', boxShadow:'0px 0px 4px 4px rgba(0,0,0,0.05)'}}>
            {children}
        </div>
    )
}

export default CenterNav;