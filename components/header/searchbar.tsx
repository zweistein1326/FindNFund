import { Input } from "@mui/material"

const Searchbar = ({width='50vw'}:any) => {
    return (
        <div style={{width:width, boxShadow:'0px 0px 4px 4px rgba(0,0,0,0.05)', padding:'10px 20px', borderRadius:50}}>
            <Input disableUnderline={true} style={{ width: '100%', fontSize:12, height:'20px'}} placeholder="Search Charitable"/>
        </div>
    )
}

export default Searchbar