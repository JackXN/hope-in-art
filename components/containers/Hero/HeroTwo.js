import React from 'react'
import {Text} from '@chakra-ui/react';
import styles from './styles';
import * as Scroll from 'react-scroll';
import DesktopNav from '../Navbar/DesktopNav';
import Newsletter from '../../Newsletter';






const HeroTwo = () => {

const Link = Scroll.Link;




    
  return (
    
      <body class="font-serif bg-white">

<div class="w-full h-screen relative p-16 bg-blue-100">
<DesktopNav/>
    <div class="relative z-20 flex flex-wrap h-full -mt-20 pt-32">
        
        <div class="w-full md:w-1/2 h-full">
            <img src='./HeaderImage.jpeg' class="w-full h-full object-cover" /> 
        </div>

        <div class="w-full md:w-1/2 p-10 flex justify-center items-center">
            
            <div class="max-w-xs">
                {/* <h1 class="text-6xl mb-4 leading-none">Welcome</h1> */}
                <img src='./HartLogo.png' alt='Hart Logo' class='mb-10'/>
                <Text as="p" mb='40px'>
            Welcome to the Hope In Art Association, a non-profit organization
            that believes accessibility, safety, and healing through recorded art classes with necessary supplies.
          </Text>
                <a href="#" class="bg-gray-900 text-white uppercase font-sans text-xs px-4 py-3">Learn more <i class="ml-1 fa fa-chevron-right"></i></a>
            </div>

        </div>
        
    </div>

    <div class="z-10 w-1/2 h-full bg-blue-300 absolute top-0 left-0 -ml-20"></div>

    <div class="z-10 w-1 h-64 bg-gray-100 absolute bottom-0 left-0 ml-5"></div>
    
</div>	
















{/* INSTA CODE SNIPPET USE LATER */}



{/* 
<div class="w-full py-32 px-24 flex flex-wrap justify-around relative">
    
    <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=640" class="w-64 h-64 object-cover mb-12 md:mb-0" />
    <img src="https://images.unsplash.com/photo-1533525801715-1f3764669187?w=640" class="w-64 h-64 object-cover mb-12 md:mb-0" />
    <img src="https://images.unsplash.com/photo-1521335751419-603f61523713?w=640" class="w-64 h-64 object-cover mb-12 md:mb-0" />
    <img src="https://images.unsplash.com/photo-1495564103921-67412af57da3?w=640" class="w-64 h-64 object-cover" />

    <h4 class="text-6xl text-gray-800 font-bold tracking-tighter absolute top-0 left-0 mt-12 ml-20">insta</h4>
    <h4 class="text-6xl text-gray-800 font-bold tracking-tighter absolute bottom-0 right-0 mb-16 mr-20">gram</h4>

</div> */}



</body>
  )
}

export default HeroTwo
