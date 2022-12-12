import { Input } from "@mui/material"

const Searchbar = () => {
    return (
        <div style={{width:'50vw', boxShadow:'0px 0px 4px 4px rgba(0,0,0,0.05)', padding:'10px 20px', borderRadius:50}}>
            <Input disableUnderline={true} style={{ width: '100%' }} placeholder="Search by name, topic, opportunity"/>
        </div>
    )
}

export default Searchbar