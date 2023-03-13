const styles = {
    wrapper: {
        position: 'relative',
        bottom:[null, null, null, null,''],
        padding: [null, null,null,'60px'],
        borderRadius: '8px'
    },


    container: {
        height: '500px',
       
        // backgroundImage: './ContributionBanner.png',
        // background: 'orange',
        display: 'flex',
        flexDirection: ['column'],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',


        h1:{
            color: 'black',
            fontSize: ['28px', '28px', '28px', '67px'],
            fontWeight: 'bold',
            textTransform: 'uppercase',
            ml: [null,null, null,'67px'],
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
