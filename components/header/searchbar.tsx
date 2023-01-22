import { Input } from "@mui/material"
import { useRouter } from "next/router"

const Searchbar = ({ width = '50vw' }: any) => {
    const router = useRouter();
    return (
        <div style={{width:width, boxShadow:'0px 0px 4px 4px rgba(0,0,0,0.05)', padding:'10px 20px', borderRadius:50}}>
            <form onSubmit={(e) => { e.preventDefault(); router.push('/search') }}>
                <Input disableUnderline={true} style={{ width: '100%', fontSize: 12, height: '20px' }} placeholder="Search Charitable" />
            </form>
        </div>
    )
}

export default Searchbar