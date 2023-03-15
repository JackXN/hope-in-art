import React from "react";
// import {motion} from 'framer-motion';
import { useRef, useState, useEffect } from "react";
import images from "./images";
import Carousel from "framer-motion-carousel";
import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
const ITEMS = [
  {
    id: 1,
    image: "./CarouselOne.jpeg",
    author: "Olivia Taylor",
    name: "Lady Luna"
  },
  {
    id: 2,
    image: "./CarouselTwo.jpeg",
    author: "Ethan Ramirez",
    name: "Tin Woman"
  },
  {
    id: 3,
    image: "./CarouselThree.jpg",
    author: "Maya Patell",
    name: "Skater"
  }
];

const colors = ["#f90", "#ef0", "#e0f"];

const Index = () => {
  return (
    <>
    

<Box sx={styles.banner}></Box>    
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        // bg='blue.100'
        // height='600px'
        borderRadius="30px"
        // boxShadow= '10px 10px 10px rgba(0,0,0,0.2)'
        // mt='125px'
        position='relative'
        bottom={['600px', ,null,null,'500px',]}
        
       
      >
        <Text
          as="h1"
          fontSize={["28px", '28px', '28px' ,'45px']}
          fontFamily="Poppins"
          fontWeight="bold"
          mb="20px"
          mt={['78px']}
          textAlign="center"
          textTransform="capitalize"
          color="white"


          data-aos='flip-left'
          data-aos-duration='2000'
          data-aos-delay='20'
        >
          Check out our weekly features <br/> showcasing art submissions{" "}
        </Text>
        
        <Box
          style={{
            padding: ["60px"],
            paddingTop: "0",
            marginBottom: "90px"
          }}

          height={'50%'}
          width={['500px', '500px', '900px']}

        >
          <Carousel
          autoPlay={true}
          interval='1500'
          
          >
            {ITEMS.map((item, i) => (
              <div key={i} style={{ textAlign: " center" }}>
                <Text as="p" color="lightblue"
                fontFamily='Poppins'
                fontSize='18px' 
                
                >
                 {item.name}
                </Text>
                <Text as='p' fontFamily='Montserrat' color='white'>By: {item.author}</Text>
                <Text as="h1" color="orange">
                  
                </Text>
                <Image
                  draggable="true"
                  src={item.image}
                  alt={item.id}
                  key={i}
                  width="100%"
                />
              </div>
            ))}
          </Carousel>
        </Box>
      </Box>
    </>
  );
};



const styles = {
    banner: {
        content: '""',
        height: ['85vh','85vh','85vh','85vh', '85vh','55vh','85vh'],
        width: '2000px',
        background: '#3E6AA6',
        position: 'relative',
        left: '-350px',
        top: ['200px', '450', '450','675px', '350px', '326px'],
        bottom: '0',
        transform: 'rotate(200deg)',
        zIndex: -1,
        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
    },

}

export default Index;
