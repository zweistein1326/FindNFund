import Link from "next/link";

const CreatePost = () => { 

    return (
        <Link href="/post/create">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px 20px', boxShadow:'0px 0px 4px 4px rgba(0,0,0,0.05)', marginTop: 48, borderRadius: 4, width: '780px' }}>
                <div style={{height:40, width:40, borderRadius:40, backgroundColor:'black', marginRight:12}}></div>
                <p>Create a Post</p>
            </div>  
        </Link>
    );
}

export default CreatePost;