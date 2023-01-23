const AttachmentTile = ({ assets }: any) => {
    return (
        assets.map((asset: any, index: number) => {
        return (
            <div key={index} style={{ height: '100%', width: '100%' }}>
                <img src={asset.uri} style={{ height: '260px', width: '100%' }} />
            </div>
        )
    }))
}

export default AttachmentTile;