import React from "react";
import { Box, Link, Text, Image } from "@chakra-ui/react";

const INFO = [
  {
    id: 1,
    title: "Connection To Community",
    headline: "Unlock Your Creativity: Access Art Classes with Ease Today!",
    description:
      "Explore the ways in which community engagement and artistic expression can intersect to create new avenues for women to showcase their talents and find a sense of belonging",
    image: "./ConnectionToCommunity.png"
  },

  {
    id: 2,
    title: "Access To Classes", 
    headline: "Unlock Your Creativity: Access Art Classes with Ease Today!",
    description:
      "Explore the opportunities available to you and the ways in which the association can support your artistic journey. Discuss the resources, connections, and funding available to members and highlight the benefits of joining a community of artists dedicated to promoting creativity and self-expression.",
    image: "./AccessToClasses.png"
  },
  {
    id: 3,
    title: "Oppurtunity To Share",
    headline: "Unlock Your Creativity: Access Art Classes with Ease Today!",
    description:
      "Explore the opportunities available to you and the ways in which the association can support your artistic journey. Discuss the resources, connections, and funding available to members and highlight the benefits of joining a community of artists dedicated to promoting creativity and self-expression.",
    image: "./testImage.png"
  }
];

const Index = () => {
  return (
    <Box sx={styles.wrapper}>
      <Text as="h1" mb={['28px']}>How We Are Making A Difference</Text>
      <Box sx={styles.container}> 
        
        {/* CONTAINER ONE */}
        <Box sx={styles.infoContainer}>
            <Box sx={styles.textContainer}>
          <Text as="h1">{INFO[0].headline}</Text>
          <Text as="p">{INFO[0].description}</Text>
          </Box>
          <Box sx={styles.infoImage} backgroundImage={INFO[0].image}>
           
            {/* <Text as='h6'>{INFO[0].title}</Text> */}
          </Box>
        </Box>

        {/* CONTAINER TWO */}
        <Box sx={styles.infoContainerTwo}>
        <Box sx={styles.textContainer}>
          <Text as="h1">{INFO[1].headline}</Text>
          <Text as="p">{INFO[1].description}</Text>
</Box>
          <Box sx={styles.infoImage} backgroundImage={INFO[1].image}

          >
          {/* <Text as='h6'>{INFO[0].title}</Text> */}
          </Box>
        </Box>

        {/* CONTAINER THREE */}

        <Box sx={styles.infoContainerThree}>
        <Box sx={styles.textContainer}>
          <Text as="h1">{INFO[2].headline}</Text>
          <Text as="p">{INFO[2].description}</Text>
</Box>
          <Box sx={styles.infoImage} backgroundImage={INFO[2].image}>
          {/* <Text as='h6'>{INFO[0].title}</Text> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  wrapper: {
 h1 :{
    fontSize: ["28px"],
    fontFamily: "poppins",
    fontWeight: "bold",
 },
  },

  infoContainer: {
    display: "flex",
    flexDirection: ["column", 'column', 'row', ],
    flex: 2,
    h1: {
        fontSize: ['19px'],
    },
 
  },

  infoContainerTwo: {
    display: "flex",
    flexDirection: ["column"]
  },

  infoImage: {
    height: '400px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',


    h6: {
        color: 'orange',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        // ml: ['25px'],
        fontSize: ['16px'],
        position: 'relative',
        top: ['90px'],
        right: ['30px']
    }

  },


  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,

    p: {
        width: ['100%'],
        fontSize: ['16px'],
        fontFamily: 'Source Sans Pro',
        mb: ['40px'],
    },

    h1: {
        fontSize: ["28px"],
        fontFamily: "poppins",
        fontWeight: "bold",
        mb: ['25px'],
        mt: ['90px'],
        
      },
  }
};
export default Index;
