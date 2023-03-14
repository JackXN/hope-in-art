import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper'
import 'swiper/swiper-bundle.css'
import {Image,Text,Box,} from '@chakra-ui/react';

SwiperCore.use([Navigation]);


const Index = () => {
  return (
    <>
    <Box
    display='flex'
    flexDirection='column'
    textAlign='center'
    justifyContent='center'
    alignItems='center'
    position='relative'
    top='30px'
    height='50%'
    >

        <Text as='h1'
        fontFamily='poppins'
        fontSize='28px'
        mb='35px'
        fontWeight='bold'
        
        
        
        >Check Out Our Monthly Features!</Text>
    <Swiper 

    ScreensPerView={2}
    spaceBetween={10}
    >
      <SwiperSlide className='swiper'><Image src='./CarouselOne.jpeg' alt='Carousel Image' />
      <Text as='h1' fontSize='20px'>Skater</Text>
        <Text as='p'>By: <br/> Peter Delira</Text>
      </SwiperSlide>
      <SwiperSlide><Image src='./CarouselTwo.jpeg' alt='Carousel Image'/>
      <Text as='h1'>Skater</Text>
        <Text as='p'>By: <br/> Peter Delira</Text>
            </SwiperSlide>
      <SwiperSlide>
        <Image src='CarouselThree.jpg'/>
        <Text as='h1'>Skater</Text>
        <Text as='p'>By: <br/> Peter Delira</Text>
        </SwiperSlide>
    </Swiper>
    </Box>
    </>
  );
};


export default Index;