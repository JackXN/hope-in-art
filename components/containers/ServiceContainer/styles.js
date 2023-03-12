const styles = {
    wrapper: {
        // padding: '10px',
        // mt: '10rem',
    },
    container: {
        // height: ['100%'],
        height: '80%',
        width: '100%',
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'row'],
        justifyContent: 'center',
        alignItems: 'center',
        // padding: ['30px', '40px'],
        padding: '10px',
        backgroundColor: '#FFFF',
        // borderRadius: ['50px'],
    },



    aboutHeader: {
        borderRadius: '2px',
        mb: ['20px'],
        mt: ['30px'],
        textAlign: 'center !important',
        filter: "drop-shadow(0.25rem 0.25rem 2rem rgba(0, 0, 0, 1))",
        position: 'relative',
        top: ['10px'],
    fontFamily: 'Roboto Slab',
    fontWeight: 'bold',
    fontSize: '21px !important',
    background: 'orange'
    },


    description: {
        // background: 'none !important',
        textAlign: 'center',
        // color: 'black',
        width: '90% !important',
        // mt: ['30px'],
        mb: ['30px'],
        // fontSize: ['28px'],
   
   p: {
        fontFamily: 'Source Sans Pro',
       fontWeight: '400',
       fontSize: '16px',
       fontWeight: 'lighter',
    },
    },



    rightSideContainer: {
        flex: 2,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ['center','center',],
        height: '40%',
        borderRadius: '20px',
        mb: '0',
        ml:'20px',
    },




    leftSideContainer: {
        flex: 2,
        // backgroundColor: '#1C1C1C',
        padding: ['15px'],
        height: '100%',
        borderRadius: '20px',
        display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         textAlign: 'left',

        h1: {
          color: '',
          textAlign: 'left',
            fontFamily: 'Poppins',
            fontWeight: 'bolder',
            fontSize: ['28px', '28px', '28px', '28px', '55px'],
        },

        p: {
            background: '#ffff',
            width: '100px',
            textAlign: 'left',
        },

    },



}

export default styles;