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
<body>
<div class="max-w-2xl mx-auto mb-40" data-aos='slide-left' data-aos-duration='2000' data-aos-delay='20'>
<h1 class='font-poppins text-4xl mb-10 font-bold'>Check Out Some Of Our Weekly Submissions!</h1>
	<div id="default-carousel" class="relative" data-carousel="static">

        <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        
            <div class=" duration-700 ease-in-out" data-carousel-item>
              
              
            </div>
        
            <div class=" duration-700 ease-in-out" data-carousel-item>
             
                <img src="./CarouselOne.jpeg"  alt="..."/>
            </div>
      
            <div class=" duration-700 ease-in-out" data-carousel-item>
                <img src="./Logo.png" alt="..."/>
            </div>
        </div>
      
        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
      
        <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="hidden text-black">Previous</span>
            </span>
        </button>
        <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                {/* <span class="">Next</span> */}
            </span>
        </button>
    </div>

	

</div>

</body>
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
