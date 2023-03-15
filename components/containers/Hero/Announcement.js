import React from 'react'
import {Box, Text, Button, Link} from '@chakra-ui/react';






const ANNOUNCEMENT = 'Double The Joy: Buy One Art Package, Give One To A Womans Shelter';



const Announcement = () => {
  return (
<Box sx={styles.container} data-aos='fade-left' data-aos-duration='2000' data-aos-delay='20'>
    <Box sx={styles.textContainer}>
    <Text as='p'>Announcement</Text>
    <Text as='h2'>{ANNOUNCEMENT}</Text>
    </Box>
    <Button>Lets Go!</Button>
</Box>
  )
}



const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#375F98',
        padding: '15px 16px',
        height: ['120%', '120%' ,'250px'],
        mt: ['90px', '90px', '35%', '20'],
        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
        mb: ['100px'],
        flex: 1,
        margin: ['30px'],
        marginTop: ['30px'],
        width: ['90%', '90%'],
    
        
 
        

    p: {
        fontFamily: 'Lato',
        color: '#A5A5A5'
    },

    h2: {
        color: 'white',
        fontSize: ['20px']

    },

    Button: {
        backgroundColor: '#CCF1FE',
        color: 'black',
        // width: ['50%'],
        position: 'relative',
        top: ['50px', '50px', '50px', '90px'],
        borderRadius: '0px'
        
    }

    },


    textContainer: {
        position: 'relative',
        top: ['20px', '20px', '20px', '40px']
    }


    
}


export default Announcement
