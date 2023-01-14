import { Input } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Container from "../../components/container";
import Header from "../../components/header";
import ImageIcon from '@mui/icons-material/Image';
import { Cancel, CancelOutlined, Link, Videocam } from "@mui/icons-material";

const CreatePost = () => { 

    const [form, setForm] = useState<any>({
        assets: [],
        // link: '',
        text:''
    });

    const inputImageRef = useRef();
    const inputVideoRef = useRef();
    // const inputLinkRef = useRef();

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
                                <input type="file" multiple accept="image/*" placeholder="Images" style={{ marginTop: 12, width:0}} ref={inputImageRef} onChange={(e) => {
                                    setForm({...form, assets: [...form.assets, ...e.target.files]})
                                }}/>
                                <ImageIcon onClick={() => {
                                    inputImageRef.current?.click();
                                }} fontSize={'medium'}/>
                            </div>
                            <div style={{marginRight: '12px'}}>
                                <input type="file" multiple accept="image/*" placeholder="Images" style={{ marginTop: 12, width:0}} ref={inputVideoRef} onChange={(e) => {
                                    setForm({...form, assets: [...form.assets, ...e.target.files]})
                                }}/>
                                <Videocam onClick={() => {
                                    inputVideoRef.current?.click();
                                }} fontSize={'medium'}/>
                            </div>
                            {/* <div style={{marginRight: '12px'}}>
                                <input type="file" multiple accept="image/*" placeholder="Images" style={{ marginTop: 12, width:0}} ref={inputLinkRef} onChange={(e) => {
                                    setForm({...form, images: [...form.images, ...e.target.files]})
                                }}/>
                                <Link onClick={() => {
                                    inputLinkRef.current?.click();
                                }} fontSize={'medium'}/>
                            </div> */}
                        </div>
                        <div className="action-buttons" style={{display:'flex', flexDirection:'row', alignItems:'flex-end', width:'100%', justifyContent:'flex-end', height:'100%'}}>
                            <p style={{padding:'10px 20px'}}>Draft</p>
                            <p style={{padding:'10px 20px'}}>Post</p>
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
        <img src={URL.createObjectURL(asset)} style={{ height: '200px', borderRadius: '8px'}} />
    </div>
}
export default CreatePost;