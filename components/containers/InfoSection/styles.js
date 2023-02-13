const styles = {
    wrapper: {
        height: '100%',
        backgroundColor: '#E3DDE9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: ['12px', '12px', '20px', '35px', '40px', '50px'],

    },
    container: {
        height: '80%',
        background: '#FFFFFF',
        width: '100%',
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'row'],
        padding: '10px',

        
        h1: {
            color: '##51837B',
            fontSize: ['50px', '50px', '73px'],
            fontFamily: 'SignPainter',
            mt: ['28px'],
        },
        p: {
            fontSize: ['16px', '16px', '24px'],
            color: 'gray',
            fontFamily: 'Montserrat',
            pt:'20px'
        },

    }, 
    leftSideContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
        textAlign: 'center',
        padding: ['10px'],
        mr: ['0px', '0px', '40px']
      
    },

    leftContainerTwo: {
        background: '#0c5e52',
        transform: 'skew(-20deg)',
        width: ['80%', '80%', '75%'],
        padding: ['16px', '16px', '25px'],
        margin: '30px',
        mt: ['30px', '30px', '63px'], 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        h3: {
            fontSize: ['14px', '14px', '23'],
            fontFamily: 'Montserrat',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            mr: ['3px', '3px', '8px']
        }
    },

    buttonContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        mb: ['30px'],
        mt: ['30px'],
        Button: {
            borderRadius: '20px',
            padding: ['15px', '15px', '25px'],
            fontSize: ['14px','14px', '18px' ]
            
        }
    },

    rightSideContainer: {
flex: 2,
    },


    imageContainer: {
        zIndex: '-1',

        img: {
            borderRadius: '15px',
            pt: ['25px']
        },
    },

    imageBanner: {
        background: '#79D7D3',
        position: 'relative',
        bottom: ['10px'],
        zIndex: '10',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '15px',
        width: ['100%', '100%', '70%', '70%', '50%'],
        ml:['0px', '0px', '50px', '50px', '87px', '100px'],
    
        p: {
            fontSize: ['14px'],
            pt: '0px',
            pb: '10px',
            color: '#08423E',
            fontFamily: 'Montserrat'
            
        },

        h3: {
            fonSize: ['30px'],
            color: '#2B343B'
        }
    },
}


export default styles;