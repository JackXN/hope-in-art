import React from 'react';
import {Box,Text, Button,Image} from '@chakra-ui/react';
import styles from './styles';



const index = () => {
  return (
<Box sx={styles.wrapper}>
<Box sx={styles.container}>
<Box sx={styles.leftSideContainer}>
<Box sx={styles.imageContainer}  data-aos='flip-left'
      data-aos-duration='1000' data-aos-delay='20'>
        {/* <Image  src={'./AboutUsImage.jpeg'} alt='About HART' */}

        />
    </Box>
    <Box sx={styles.imageBanner}  data-aos='flip-right'
      data-aos-duration='1000' data-aos-delay='20'>
        <span style={{fontSize: ['50px'], color: '#ffff', fontWeight: 'bold', mr: '60px', display: 'none'}}>“</span>
        <Text as='p'>I found I could say things with colour and shapes that I couldn’t say any other way – things I had no words for.
</Text>
    </Box>
</Box>
<Box sx={styles.rightSideContainer}>
  <Text as='h5' data-aos='slide-right'  data-aos-duration='1000' data-aos-delay='20'>About Us</Text>
  <Text as='h1' data-aos='slide-left'  data-aos-duration='1000' data-aos-delay='20'>Helping People Heal
Through Their Own Creative
Process </Text>
<Text as='p' data-aos='flip-right'  data-aos-duration='1000' data-aos-delay='20'>many people don’t realize that creating art and being an artist is a privilege. a privilege that has backing of money, resources, and time. Hope in Art Association strives to bring these resources as a source of hope to heal through art for women in shelter services.</Text>
<Box sx={styles.tipBox}>
  <Text as='p' data-aos='fade-left'  data-aos-duration='1000' data-aos-delay='20'>Did You Know? Homeless women steal art supplies</Text>
</Box>
<Button data-aos-duration='1000' data-aos-delay='20'>Learn More</Button>
</Box>
</Box>
</Box>                                 
  )
}

export default index
