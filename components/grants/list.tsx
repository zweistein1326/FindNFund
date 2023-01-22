import GrantTile from "./tile";

const GrantList = ({grants, selectGrant}:any) => {
    return (
        <div style={{minWidth:'20vw'}}>
            {grants.map((grant: any, index: number) => {
                return (
                    <GrantTile grant={grant} key={index} selectGrant={() => { selectGrant(grant) }} />
                )
            })}
        </div>
    )
}

export default GrantList;