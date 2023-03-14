import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper'
import 'swiper/swiper-bundle.css'
import {Image,Text,Box,} from '@chakra-ui/react';





// REACT SLICK
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";
SwiperCore.use([Navigation]);


const Index = () => {
  return (
    <>
    <Box
    // display={['flex', 'flex', 'flex','none']}
    // flexDirection='column'
    
    
    >
        <Text as='h1'
        fontFamily='poppins'
        fontSize='28px'
        mb='35px'
        fontWeight='bold'
        textAlign='center'
        style={{
            paddingTop: ['150px']
        }}
        
        >Check Out Our Monthly Features!</Text>
        <Text as='p' color='lightgray' textAlign='center'>(Swipe Left)</Text>
    <Swiper 
style={{
    paddingTop: ['50px'],
    // background: 'pink',
    marginBottom: ['190px'],
    padding:[null,null,'190px','190px', '190px'],
    display: ['flex','flex', 'none', 'none', 'none' ],
    paddingBottom: '60px'
}}
    ScreensPerView={2}
    spaceBetween={10}
    >
      <SwiperSlide className='swiper'><img src='./CarouselOne.jpeg' alt='Carousel Image'/>
      <Box textAlign='center'>
      <Text as='h1' fontSize='20px' fontFamily='Lato' fontWeight='bold'>Lady Lemon</Text>
        <Text as='p'  fontFamily='Lato' fontWeight='bold' fontSize='18px'>By: <br/> Thomas Pringle</Text>
        </Box>
      </SwiperSlide>

      <SwiperSlide><Image src='./CarouselTwo.jpeg' alt='Carousel Image'/>
      
      <Box textAlign='center'>
      <Text as='h1' fontSize='20px'  fontFamily='Lato' fontWeight='bold'>Untitled </Text>
        <Text as='p' fontSize='18px'>By: <br/> Gerald Wiggins</Text>
        </Box>
            </SwiperSlide>
      <SwiperSlide>
        <Image src='CarouselThree.jpg'/>
        <Box textAlign='center'>
      <Text as='h1' fontSize='20px'  fontFamily='Lato' fontWeight='bold'>Skater</Text>
        <Text as='p' fontSize='18px'>By: <br/> Peter Delira</Text>
        </Box>
        </SwiperSlide>
    </Swiper>
    </Box>
    </>
  );
};


export default Index;