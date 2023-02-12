const styles = {
    container: {
        background: 'orange',
        height: '100vh',
        backgroundImage: './HeroBgTwo.png',
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    wrapper: {
        background: '#E9B2BB',
        padding: ['50px'],
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        
        p: {
            fontSize: ['17px'],
            fontFamily: 'Indie Flower',
            color:'white'
        }
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    buttonContainer: {
        position: 'relative',
        top: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        cursor: 'pointer',

        h2: {
            color: '#ffff',
            fontSize: '16'
            
        }
    }

}


export default styles;