import React from 'react'
import {Box, Text, Button, Link} from '@chakra-ui/react';






const ANNOUNCEMENT = 'Double The Joy: Buy One Art Package, Give One To A Womans Shelter';



const Announcement = () => {
  return (
<Box sx={styles.container}>
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
        height: '120%',
        mt: ['90px'],
        mb: ['100px'],

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
        width: ['50%'],
        position: 'relative',
        top: ['50px']
        
    }

    },


    textContainer: {
        position: 'relative',
        top: ['20px']
    }


    
}


export default Announcement
