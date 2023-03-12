import React from "react";
import { Box, Text, Link, Image, Button } from "@chakra-ui/react";
import styles from "./styles";

const index = () => {
  return (
    <Box sx={styles.wrapper} id="services">
      <Box sx={styles.container}>
        <Box sx={styles.rightSideContainer}>
          <Image src="./ClassesImage.png" alt="Hope In Art Classes Image" />
        </Box>

        <Box sx={styles.leftSideContainer}>
          <Text
            as="h1"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="20"
          >
          Join Our Inclusive Art Community Today!
          </Text>
          <Text
            as="p"
            sx={styles.description}
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="20"
            mt='30px'
            fontFamily='Source Sans Pro'
          >
           Our classes are designed to be inclusive and supportive, regardless of skill level or experience. Whether youre a beginner or an experienced artist, we invite you to join our community and explore your creativity with us. Our volunteer artists are passionate about sharing their knowledge and expertise with others, and they offer a wide range of classes, from drawing and painting to craft mediums.
          </Text>
 
 <Box  
 >
          <Text as='p' sx={styles.description} data-aos='flip-right' data-aos-duration='1000'
          data-aos-delay='20' padding='15px' backgroundColor='#375F98 !important'  color='white' fontFamily='Source Sans Pro' fontWeight='bolder' boxShadow= '10px 10px 10px rgba(0,0,0,0.2)'>
          In addition to our recorded art classes, we also provide free art supplies to shelters. We understand that art supplies can be expensive, and we want to make sure that everyone has access to the tools they need to create. Aid us in making these tools accessible in our Double the Joy initiative!
          <Button color='black' ml='50px' mt={['35px', '35px', '35px', '20px']}>See How It Works</Button>
          </Text>
          
          </Box>
          <Box>
            <Button>Learn More</Button>
            <Button ml='20px'>Register</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default index;
