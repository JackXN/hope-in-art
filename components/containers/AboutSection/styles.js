const styles = {
    wrapper: {
        height: '100%',
        backgroundColor: '#E3DDE9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: ['12px', '12px', '20px', '35px', '40px', '50px'],

    },
    container: {
        height: '80%',
        background: '#FFFFFF',
        width: '100%',
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'column', 'row'],
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


    imageContainer: {
        zIndex: '-1',
        overflow: 'hidden',
        transition: 'all 1s ease-in-out',
        transform:'scale(1)',

        Image: {
            transition: 'all 1s ease-in-out',
            transform:'scale(1)',
        },

        

        
       

        img: {
            borderRadius: '15px',
            pt: ['25px', '25px', '25px']
        },
    },

    imageBanner: {
        background: '#0C5E52',
        position: 'relative',
        bottom: ['10px','10px', '10px','50px'],
        zIndex: '10',
        textAlign: 'center',
        display: 'flex',
        flexDirection: ['row','column', 'column','row'],
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        width: ['100%', '100%', '70%', '70%', '50%','80%'],
        ml:['0px', '0px', '50px', '50px', '87px', '100px'],
        padding: '10px',
    
        p: {
            fontSize: ['14px', '16px', '16px', '25px'],
            pt: '0px',
            pb: '10px',
            // color: '#08423E',
            color: '#FFFFFF',
            fontFamily: 'Indie Flower, cursive'
            
        },
        span: {
              alignSelf: 'center',
            textAlign: 'center',
            },

        h3: {
            fonSize: ['30px'],
            color: '#FFFFF'
        }
    },


    leftSideContainer: {
        flex: 2,
        mr: ['0px', '0px', '0px', '53px']
    },

    rightSideContainer: {
        flex: 2,
        background: '#FFFF',
        padding: ['15px'],
        display: 'flex',
        flexDirection: 'column',

            h5: {
                position: ['relative'],
                top: ['33px'],
                fontFamily: 'SignPainter',
                color: '#51837B',
                fontSize: ['20px', '20px', '20px','35px'],
                // fontWeight: 'bold'
            },

            h1: {
                fontWeight: 'bold',
                color: '#030503'
                
            },

            Button: {
                width: '50%',
                ml: ['25%'],
                mt: ['40px'],
                bg: '#2E404B',
                color: 'white'
            }
    },








    tipBox: {
        backgroundColor: '#DDF1F0',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        mt: ['50px'],
        

        p: {
            fontSize: ['16px', '16px', '16px', '25px'],
            padding: ['10px'],
            fontFamily: 'Indie Flower',
            fontWeight: 'bolder',
        }
    },

  


    
}

export default styles;