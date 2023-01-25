const AttachmentTile = ({ assets }: any) => {
    return (
        assets.map((asset: any, index: number) => {
        return (
            <div key={index} style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                <img src={asset.uri} style={{ width: '100%' }} />
            </div>
        )
    }))
}

export default AttachmentTile;