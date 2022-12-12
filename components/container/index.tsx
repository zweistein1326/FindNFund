const Container = ({children}:any) => { 
    return (
        <div style={{ maxHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: '10vh', overflow: 'hidden' }}>
            {children}
        </div>
    )
}

export default Container;