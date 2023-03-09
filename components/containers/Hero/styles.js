const styles = {
    container: {
        background: '#FFFFFF',
        height: '100%',
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: ['11px']
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        
    },


    imageContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: '30px',
        position: 'relative',
        zIndex: '10'

        
    },

    headerImage: {
height: ['100%'],
width: ['100%', '100%', '25%', '25%'],
position: 'relative',
left: [null, null,null,'120px'],
top: [null,null,null, '35px'],
mb: [null,null,null,'120px'],


    },


    heroContainer: {
        height: '100%',
        // padding: '5px',
        // backgroundColor: '#3489B0',
        display: 'flex',
        flexDirection: ['column','column', 'column','row'],
        


        
    },

    banner: {
        content: '""',
        height: '75vh',
        width: '2000px',
        background: '#3E6AA6',
        position: 'absolute',
        left: '-350px',
        top: '184px',
        bottom: '0',
        transform: 'rotate(160deg)',
        zIndex: 1,
        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
    },


    heroText: {
        // mt: ['20px'],
        padding: ['20px'],
        flex: 2,
        textAlign: ['center', 'center', 'center', 'left'],
        zIndex: 10,
        position: 'relative',
        bottom: [null,null,null,'61px'],

        h1: {
            color: '#FFFFFF',
            fontSize: '28px',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            // textShadow: '2px 2px  1px black',
            textTransform: 'uppercase',
            mb: ['22px'],
            // background: '#3E6DA6',
            // transform: 'skewY(-20deg)',
            
            mt: [null, null,null,'40px','90px']

            
        },

        p: {
            color: '#FFFFFF',
            fontFamily:'Lato',
            color: 'lightgray',
            fontSize: ['16px'],
            width: '70%'
        
        }
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'row'],
        justifyContent: ['center'],
        position: 'relative',
        top: [null,null,null,'100px'],
        mt: ['30px',null,null,'50px'],
        



        Button: {
            margin: ['13px'],
            padding: '23px 23px 23px',
            fontFamily: 'Lato'
        }
    },

    heroImage: {
        height: ['100%', ],
        width: ['100%', '100%', '100%'],
        position: 'relative',
       bottom: ['0px', '0px', '0px','250px'],
       zIndex: 2,
       boxShadow: '8px 4px rgba(0,0,0,0.1)'
       
    },

    heroImageContainer:{
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        flex: 2,
        mt: [null,null,null,'50px']
        
        

    },
    donateButton: {
        bg:'#2BA4E8',
        color:'white',
        borderRadius:'0',
        fontSize: '19px'
        
    }

}


export default styles;