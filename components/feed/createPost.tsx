import Link from "next/link";

const CreatePost = () => { 

    return (
        <Link href="/post/create">
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', padding:'10px 20px', border:'1px solid black', marginTop:48, borderRadius:16}}>
                <div style={{height:40, width:40, borderRadius:40, backgroundColor:'black', marginRight:12}}></div>
                <p>Create a Post</p>
            </div>  
        </Link>
    );
}

export default CreatePost;