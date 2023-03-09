import React from 'react';
import {Box, Text, Button, Link} from '@chakra-ui/react';

import {AiOutlineArrowRight as Arrow} from 'react-icons/ai';

const Intro = () => {
  return (
    <Box sx={styles.container}>
    <Text as='h2'>The Hope In <br/> Art Association</Text>
    <Box sx={styles.content}>
<Text as='p'>
    Welcome to the Hope In Art Association, a non-profit organization that believes in the power of art to transform lives. We are dedicated to helping the homeless community by providing opportunities for creative expression and personal growth through art.
    </Text>
    </Box>
    <Button
    bg='none'
    ><Link>See Our Programs</Link> <Arrow/></Button>
    </Box>
  )
}



const styles = {
    container: {
        mt: ['30px'],
    backgroundColor: '#CCF1FE',
    boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
    padding: '18px 19px',
    mt: ['150px'],
    width: ['100%', '50%'],
    // flex: 2,
    


    h2: {
        fontSize: ['30px'],
        fontFamily: 'Lato',
        fontWeight: 'bold',
        mb: ['30px']

    }
    },

    content: {
    p: {
        fontFamily: 'Montserrat',
        fontWeight: 'light',
        fontSize: ['16px'],
        mb: ['30px']
    },



},



}

export default Intro
