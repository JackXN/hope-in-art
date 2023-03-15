import React from 'react';
import {Box, Text, Button, Link} from '@chakra-ui/react';

import {AiOutlineArrowRight as Arrow} from 'react-icons/ai';

const Intro = () => {
  return (
    <Box sx={styles.container} data-aos='fade-in' data-aos-duration='1000' data-aos-delay='20'>
    <Text as='h2' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='20'>The Hope In <br/> Art Association</Text>
    <Box sx={styles.content}>
<Text as='p' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='20'>
    Welcome to the Hope In Art Association, a non-profit organization that believes in the power of art to transform lives. We are dedicated to helping the homeless community by providing opportunities for creative expression and personal growth through art.
    </Text>
    </Box>
    <Button
    bg='none'
    ><Link data-aos='fade-right' data-aos-duration='1000' data-aos-delay='20'>See Our Programs</Link> <Arrow data-aos='fade-left' data-aos-duration='1000' data-aos-delay='20'/></Button>
    </Box>
  )
}



const styles = {
    container: {
        mt: ['30px', '30px', '30px',],
    backgroundColor: '#CCF1FE',
    boxShadow: '10px 10px 10px rgba(0,0,0,0.2)',
    padding: '18px 19px',
    mt: ['150px' , '150px', '150px', '0px'],
    width: ['100%', '50%', null,'43%'],
    height: '100%',
    // flex: [null, null, null, 3],
    
    


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
