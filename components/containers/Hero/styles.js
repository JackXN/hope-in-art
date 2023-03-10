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
width: ['100%', '100%', '50%', '50%', '25%'],
position: 'relative',
left: [null, null,null,'null', '155px',],
top: [null,null,null, '35px', '300px',],
mb: [null,null,null,'120px'], 
right: [null,null,null ]


    },


    heroContainer: {
        height: '100%',
        // padding: '5px',
        // backgroundColor: '#3489B0',
        display: 'flex',
        flexDirection: ['column','column', 'column','row'],
        pt: '20px'
    },

    banner: {
        content: '""',
        height: ['85vh','85vh','85vh','62vh'],
        width: '2000px',
        background: '#3E6AA6',
        position: 'absolute',
        left: '-350px',
        top: ['290px', '450', '450', '450','675px'],
        bottom: '0',
        transform: 'rotate(160deg)',
        zIndex: 0,
        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
    },


    heroText: {
        // mt: ['20px'],
        padding: ['px'],
        flex: 2,
        textAlign: ['center', 'center', 'center'],
        zIndex: 10,
        position: 'relative',
        bottom: [null,null,null, '35px'],
        top: ['90px', '90px', '90px','125px', '150px', '250px'],
        

        h1: {
            color: '#FFFFFF',
            fontSize: ['28px', '28px', '33px'],
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            // textShadow: '2px 2px  1px black',
            textTransform: 'uppercase',
            mb: ['22px'],
            // background: '#3E6DA6',
            // transform: 'skewY(-20deg)',
            textAlign: ['center','center', 'center', 'left'],
            
            mt: [null, null,null,'40px','100px']

            
        },

        p: {
            color: '#FFFFFF',
            fontFamily:'Lato',
            color: 'lightgray',
            fontSize: ['16px', '16px', '17px'],
            textAlign: ['center','center', 'center', 'left'],
            width: [null,null,null,'75%','45%',],
            
        
           
            

        
        }
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: ['column', 'column', 'row', 'row'],
        justifyContent: ['center'],
        position: 'relative',
        top: [null,null,null,'100px'],
        mt: ['30px',null,'150px','50px'],
        
        
        



        Button: {
            margin: ['13px'],
            padding: '20px 20px 23px',
            fontFamily: 'Lato',
            width: ['50%', '75%', '20%']

        }
    },

    heroImage: {
        height: ['100%', ],
        width: ['100%', '100%', '50%', '90%'],
        position: 'relative',
       bottom: ['0px', '0px', '0px'],
   
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
        
        
    }

}


export default styles;