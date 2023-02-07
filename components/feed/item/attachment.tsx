const AttachmentTile = ({ assets }: any) => {
    return (
        assets.map((asset: any, index: number) => {
        return (
            <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent:'flex-end', background:'yellow' }}>
                <img src={asset.uri} style={{ maxWidth: '240px' }} />
            </div>
        )
    }))
}

export default AttachmentTile;