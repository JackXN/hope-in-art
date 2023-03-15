const styles = {
    wrapper: {
        position: 'relative',
        // bottom:[null, null, null, null,'500px'],
        padding: [null, null,null,'60px'],
        borderRadius: '8px',
        // backgroundColor: '#E3DEEB !important'
    },


    container: {
        height: '100%',
        display: 'flex',
        flexDirection: ['column'],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',


        h1:{
            color: 'black',
            fontSize: ['28px', '28px', '28px', '28px'],
            fontWeight: 'bold',
            // textTransform: 'uppercase',
            ml: ['20px',null, '20px','67px'],
        }
    },


    boxContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        Image: {
           
        }
    },

    imageContainer: {
        height: '35%',
        width: '35%',
        content: '""',
        // backgroundImage: './MissionImage.jpg'
    }
}


export default styles;
