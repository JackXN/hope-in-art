import React from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import styles from "./styles";
import Logo from "../../../public/NewHart.png";
// import Image from 'next/image';
import Navbar from '../Navbar/index';

import {
  BiDownArrowAlt as Arrow,
  BiDonateHeart as Donate
} from "react-icons/bi";

const Index = () => (
  
  <>
  <Box zIndex='100' position='relative' bottom='50px' right='28px'>
  <Navbar/>
  </Box>
  <Box sx={styles.container}>
    
    <Box sx={styles.wrapper}>
      
      <Box sx={styles.imageContainer}>

        <Image
          src="./HartLogo_One.png"
          alt="Hope In Art Association Logo"
          height="100%"
          width="100%"
          sx={styles.headerImage}
        />
      </Box>

      <Box sx={styles.heroContainer}>
        <Box sx={styles.banner}></Box>
        <Box sx={styles.heroImageContainer}>
          <Image
            src="./HeaderImage.jpeg"
            alt="Hope In Art Hero Image"
            sx={styles.heroImage}
          />
        </Box>

        <Box sx={styles.heroText}>
          <Text as="h1">
            <span>Empowering </span>Women <br /> Through Art
          </Text>
          <Text as="p">
            Welcome to the Hope In Art Association, a non-profit organization
            that believes in the power of art to transform lives. We are
            dedicated to helping the homeless community by providing
            opportunities for creative expression and personal growth through
            art.
          </Text>
        </Box>
      </Box>
    </Box>
  </Box>
  </>
);

export default Index;
