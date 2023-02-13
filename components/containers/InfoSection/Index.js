import React from 'react';
import {Box, Text, Button, Grid, GridItem} from '@chakra-ui/react';
import styles from './styles';
import {FaPaintBrush as PaintBrush} from 'react-icons/fa';
import {AiOutlineArrowRight as ArrowRight} from 'react-icons/ai'; 
import Image from 'next/image';

const SERVICE_OPTIONS = [
    {
        label: "Access To Art Supplies",
        icon: {PaintBrush}
    },

    {
        label: "Connection To Community",
        icon: {PaintBrush}
    },
    {
        label: "Access To Classes",
        icon: {PaintBrush}
    },
    {
        label: "Oppurtunity To Share",
        icon: {PaintBrush}
    },
]

 



const Index = () => {
  return (
  <Box sx={styles.wrapper}>
<Box sx={styles.container}>
 <Box sx={styles.leftSideContainer}>
    <Text as='h1'  data-aos='fade-down-left'
      data-aos-duration='1000' data-aos-delay='20'>What We Do</Text>
    <Text as='p'  data-aos='fade-up-right'
      data-aos-duration='1000' data-aos-delay='20'>Establishing A Donor Advised Fund is Convenient and simple way for you to support and manage global Philanthropic Initiatives</Text>
<Box sx={styles.buttonContainer} flexWrap='wrap'  >
    <Grid templateColumns='repeat(2, 1fr)' gap={7}>
{SERVICE_OPTIONS.map((item, index) => (
    <GridItem key={index}>
    <Button  data-aos='fade-down-right'
      data-aos-duration='1000' data-aos-delay='20' key={index} bg='#F2F2F2'><span style={{marginRight:' 12px'}}><PaintBrush color='#C49B9B'/></span>{item.label}</Button>
    </GridItem>
))}
</Grid>
</Box>
    <Text as='p' mt='30px'  data-aos='fade-up'
      data-aos-duration='1000' data-aos-delay='20'>React hooks are hooks that hook into the component on render. They run the functions and stuff but im actually not too sure lol okay here wer go. and there is a a description that we can tell and i will replace it with actual text later. You know that because there are things that we need to do</Text>

    <Box sx={styles.leftContainerTwo}>
    <Text as='h3' color='white'  data-aos='fade-left'
      data-aos-duration='1000' data-aos-delay='20'> 
        See How You Can Help Today!
    </Text>
    <ArrowRight color='white' fontSize={['25px', '25px', '30px']} fontWeight='bold'/>
    </Box>
 </Box>
 <Box sx={styles.rightSideContainer}>
    <Text as='h1'  data-aos='fade-left'
      data-aos-duration='1000' data-aos-delay='20'>HARTS Mission</Text>
    <Text as='p'  data-aos='fade-right'
      data-aos-duration='1000' data-aos-delay='20'>Establishing A Donor Advised Fund is Convenient and simple way for you to support and manage global Philanthropic Initiatives</Text>

    <Box sx={styles.imageContainer}  data-aos='flip-left'
      data-aos-duration='1000' data-aos-delay='20'>
        <img  src={'./MissionImage.jpg'} alt='HART Community'/>
    </Box>
    <Box sx={styles.imageBanner}  data-aos='flip-right'
      data-aos-duration='1000' data-aos-delay='20'>
        <Text as='h3' fontSize={['30px']}>2000+</Text>
        <Text as='p'>People Have Been Helped</Text>
    </Box>
 </Box>
</Box>
  </Box>
  )
}

export default Index
