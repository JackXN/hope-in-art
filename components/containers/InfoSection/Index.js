import React from 'react';
import {Box, Text, Button, Grid, GridItem} from '@chakra-ui/react';
import styles from './styles';
import {FaPaintBrush as PaintBrush} from 'react-icons/fa';
import {AiOutlineArrowRight as ArrowRight} from 'react-icons/ai'; 
import Image from 'next/image';

const SERVICE_OPTIONS = [
    {
        label: "Art Supplies",
        icon: {PaintBrush}
    },

    {
        label: "Art Supplies",
        icon: {PaintBrush}
    },
    {
        label: "Art Supplies",
        icon: {PaintBrush}
    },
    {
        label: "Art Supplies",
        icon: {PaintBrush}
    },
]

 



const Index = () => {
  return (
  <Box sx={styles.wrapper}>
<Box sx={styles.container}>
 <Box sx={styles.leftSideContainer}>
    <Text as='h1'>What We Do</Text>
    <Text as='p'>Establishing A Donor Advised Fund is Convenient and simple way for you to support and manage global Philanthropic Initiatives</Text>
<Box sx={styles.buttonContainer} flexWrap='wrap' >
    <Grid templateColumns='repeat(2, 1fr)' gap={7}>
{SERVICE_OPTIONS.map((item, index) => (
    <GridItem key={index}>
    <Button key={index} bg='#F2F2F2'><span style={{marginRight:' 12px'}}><PaintBrush color='#C49B9B'/></span>{item.label}</Button>
    </GridItem>
))}
</Grid>
</Box>
    <Text as='p' mt='30px'>React hooks are hooks that hook into the component on render. They run the functions and stuff but im actually not too sure lol okay here wer go. and there is a a description that we can tell and i will replace it with actual text later. You know that because there are things that we need to do</Text>

    <Box sx={styles.leftContainerTwo}>
    <Text as='h3' color='white'>
        See How You Can Help Today!
    </Text>
    <ArrowRight color='white' fontSize={['25px', '25px', '30px']} fontWeight='bold'/>
    </Box>
 </Box>
 <Box sx={styles.rightSideContainer}>
    <Text as='h1'>HARTS Mission</Text>
    <Text as='p'>Establishing A Donor Advised Fund is Convenient and simple way for you to support and manage global Philanthropic Initiatives</Text>

    <Box sx={styles.imageContainer}>
        <img  src={'./MissionImage.jpg'} alt='HART Community'/>
    </Box>
    <Box sx={styles.imageBanner}>
        <Text as='h3' fontSize={['30px']}>2000+</Text>
        <Text as='p'>People Have Been Helped</Text>
    </Box>
 </Box>
</Box>
  </Box>
  )
}

export default Index
