import { Input } from "@mui/material";
import Header from "../../components/header";

const CreatePost = () => { 
    return (
        <div style={{paddingTop:'10vh'}}>
            <Header/>
            <div style={{paddingLeft:'120px'}}>
                <h1>Create a Post</h1>
                <div style={{background:'#D9D9D9', width:'60vw', height:'60vh', padding:'20px 40px', display:'flex', flexDirection:'column'}}>
                    <div className={"add-button"}>
                        <h1>+</h1>
                    </div>
                    <div className="caption-input" style={{width:'100%'}}>
                        <Input placeholder="What's new" style={{width:'100%'}}/>
                    </div>
                    <div className="action-buttons" style={{display:'flex', flexDirection:'row', alignItems:'flex-end', width:'100%', justifyContent:'flex-end', height:'100%'}}>
                        <p style={{padding:'10px 20px'}}>Cancel</p>
                        <p style={{padding:'10px 20px'}}>Post</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;