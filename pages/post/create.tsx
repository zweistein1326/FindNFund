import { Input } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import Container from "../../components/container";
import ImageIcon from '@mui/icons-material/Image';
import { CancelOutlined, Videocam } from "@mui/icons-material";
import PostContext from "../../hooks/posts-context";
import { Post } from "../../dummydata/posts";
import { useRouter } from "next/router";
import LoginContext from "../../hooks/login-context";

const CreatePost = () => { 

    const router = useRouter();
    const [form, setForm] = useState<any>({
        assets: [],
        // link: '',
        text:''
    });

    const { addPost } = useContext(PostContext);
    const { user_id } = useContext(LoginContext);

    const inputImageRef: any = useRef();
    const inputVideoRef: any = useRef();
    // const inputLinkRef = useRef();

    const submitPost = (e:any) => {
        e?.preventDefault();
        const post: Post = {
            header: {
                sender_id: user_id,
                timestamp: (new Date()).getTime()
            },
            info: form,
            stats: {
                likes: 0,
                comments:0
            }
        }
        addPost(post);
        router.push('/feed');
    }

    const removeAsset = (assetIndex: number) => {
        let new_assets = [];
        for (let index = 0; index < form.assets.length; index++) {
            const asset = form.assets[index];
            if (index == assetIndex) {
                // Do nothing
            }
            else {
                new_assets.push(asset);
            }
        }
        console.log(new_assets)
        setForm({...form, assets:new_assets})
    }

    
    return (
        <Container>
            <div style={{padding:'40px 40px', height:'4000px', width:'100%', paddingBottom:80}}>
                <h1>Create a Post</h1>
                <div style={{background:'#D9D9D9', width:'100%', padding:'20px 40px', display:'flex', flexDirection:'column'}}>
                    <div className="caption-input" style={{ width: '100%' }}>
                        <Input multiline rows={5} placeholder="What's new?" type={'text'} style={{ width: '100%' }} onChange={(e) => {setForm({...form, text: e.target.value})}} />
                    </div>
                    <AssetsPreview assets={form.assets} removeAsset={removeAsset} />
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <div className="auxillary-input" style={{display:'flex', flexDirection:'row'}}>
                            <div style={{marginRight: '12px'}}>
                                <input type="file" multiple accept="image/*" placeholder="Images" style={{ marginTop: 12, width: 0 }} ref={inputImageRef} onChange={(e) => {
                                    if (e.target.files) {
                                        const files: any = e.target.files;
                                        let files_urls = []
                                        for (let index = 0; index < files.length; index++) {
                                            const file = files[index];
                                            files_urls.push({uri: URL.createObjectURL(file)})
                                        }
                                        setForm({...form, assets: [...form.assets, ...files_urls]})
                                    }
                                }}/>
                                <ImageIcon onClick={() => {
                                    inputImageRef.current?.click();
                                }} fontSize={'medium'}/>
                            </div>
                            <div style={{marginRight: '12px'}}>
                                <input type="file" multiple accept="image/*" placeholder="Images" style={{ marginTop: 12, width: 0 }} ref={inputVideoRef} onChange={(e) => {
                                    if (e.target.files) {
                                        const files: any = e.target.files;
                                        let files_urls = []
                                        for (let index = 0; index < files.length; index++) {
                                            const file = files[index];
                                            files_urls.push({uri: URL.createObjectURL(file)})
                                        }
                                        setForm({...form, assets: [...form.assets, ...files_urls]})
                                    }
                                }}/>
                                <Videocam onClick={() => {
                                    inputVideoRef.current?.click();
                                }} fontSize={'medium'}/>
                            </div>
                        </div>
                        <div className="action-buttons" style={{display:'flex', flexDirection:'row', alignItems:'flex-end', width:'100%', justifyContent:'flex-end', height:'100%'}}>
                            <p style={{padding:'10px 20px'}}>Draft</p>
                            <p style={{padding:'10px 20px', cursor:'pointer'}} onClick={submitPost}>Post</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const AssetsPreview = ({ assets, removeAsset }: any) => {
    
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        let new_assets = [];
        for (let index = 0; index < assets.length/2; index++) {
            const asset = assets[index];
            new_assets.push(asset);
        }
    },[assets])

    return (
        <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column' }}>
            <div style={{display:'flex', flexDirection:'row', marginTop:'4px'}}>
                {
                    assets.slice(0, Math.ceil(assets.length/2)).map((asset: any, index: number) => <AssetTile key={index} asset={asset} removeAsset={() => { removeAsset(index) }} />) 
                }
            </div>
            <div style={{display:'flex', flexDirection:'row', marginTop:'4px'}}>
                {
                    assets.slice(Math.ceil(assets.length/2), assets.length).map((asset: any, index: number) => <AssetTile key={index} asset={asset} removeAsset={() => { removeAsset(index + Math.ceil(assets.length/2)) }} />)
                }
            </div>
        </div>)
}

const AssetTile = ({ asset, removeAsset }: any) => {
    return <div style={{position:'relative', height:'200px', marginRight:4}}>
        <CancelOutlined style={{position:'absolute', top:10, right:10, color:'white'}} onClick={removeAsset} />
        <img src={asset.uri} style={{ height: '200px', borderRadius: '8px'}} />
    </div>
}
export default CreatePost;