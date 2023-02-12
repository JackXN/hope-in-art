import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import styles from './styles';
import Logo from '../../../public/NewHart.png'
import Image from 'next/image';

import {BiDownArrowAlt as DownArrow} from 'react-icons/bi';


const Index = () => (
<Box sx={styles.container}>
    <Box sx={styles.wrapper}>
    <Box sx={styles.imageContainer} data-aos='fade-right' data-aos-duration='5000' data-aos-delay='50'>
        <Image src={Logo} alt='Logo' className='logo_image'/>
    </Box>
  <Text as='p' data-aos='fade-left' data-aos-duration='5000' data-aos-delay='50'>Finding Hope In Art</Text>
    </Box>
    <Box sx={styles.buttonContainer}>
    <Text as='h2' fontSize='30px' fontFamily='Indie Flower' color='#ffff' data-aos='fade-down' data-aos-duration='5000' data-aos-delay='50'>Learn More</Text>
    <DownArrow style={{fontSize: ['14px']}} color='#ffff' data-aos='fade-up' data-aos-duration='5000' data-aos-delay='50'/>
    </Box>
</Box>
);

export default Index;
