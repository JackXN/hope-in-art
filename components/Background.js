
import { Box } from "@chakra-ui/react";




const images= [
  './corner-bl.png', 
]

const AbstractBackground = ( ) => {



  const bgImageStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
  };

  return (
    <Box position="relative" height="100vh">
      {images.map((image, index) => (
        <Box
          key={index}
          {...bgImageStyles}
          backgroundImage={`url(${image})`}
          opacity={(index + 1) / images.length}
          transform={`translateX(${index * 100}%)`}
          height='50%'
        />
      ))}
    </Box>
  );
};

export default AbstractBackground;