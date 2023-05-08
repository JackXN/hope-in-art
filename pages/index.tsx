import React, {useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {getProducts} from '../services/index';
import AOS from 'aos';
import {Box} from '@chakra-ui/react';
import Script from 'next/script';
import Panel from '../components/Panel';


// Components
import Navbar from '../components/containers/Navbar/index';
import Hero from '../components/containers/Hero/index';
import InfoSection from '../components/containers/InfoSection/Index';
import AboutSection from '../components/containers/AboutSection/index';
import ContributionSection from '../components/containers/ContributionSection/Index';
import InfoContainer from '../components/containers/Hero/InfoContainer';
import WhatWeDo from '../components/containers/WhatDoWeDo/index';
import Background from '../components/Background';
import Difference from '../components/containers/DifferenceSection/Index';
import ServiceContainer from '../components/containers/ServiceContainer';
import ContactForm from '../components/ContactForm';
import Showcase from '../components/containers/ArtShowcase/Index';
import Footer from '../components/Footer';
import ErrorPage from '../components/ErrorPage';
import Carousel from '../components/Carousel';
import Test from '../components/test';
import DesktopNav from '../components/containers/Navbar/DesktopNav';
import HeroTwo from '../components/containers/Hero/HeroTwo';
import NewsLetter from '../components/Newsletter';
import TestSection from '../components/containers/Testing/Sections';
import ContentFive from '../components/containers/Testing/ContentFive';
//! UPDATE BACKGROUND COLOR TO GRADIENT.
// ? linear-gradient(135deg, #E5DDE1 0%, #E0DCEA 100%)


const inter = Inter({ subsets: ['latin'] })
export default function Home() {

useEffect(() => {
  AOS.init({})
}, [])

  return (
    <>
    <body>
      <Head>
        <title>HART - Hope In Art Association</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* AOS */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css" rel="stylesheet" />
      </Head>
      <Box padding='10px'>
          {/* <Navbar/> */}
          {/* <DesktopNav/> */}
           {/* <Hero/> */}
           <HeroTwo/>
          <InfoContainer/>
          <ContentFive/>
          {/* <WhatWeDo/> */}
          
          <TestSection/>
          <Test/>
          <Panel/>
          <Carousel/>
           
          <ContactForm/>
          
          <Footer/> 
          {/* <ErrorPage/> */}
          {/* <Difference/> */}
        {/* <Background/> */}
          {/* <InfoSection/> */}
          {/* <AboutSection/> */}
          </Box>


          <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
          </body>
    </>
  )
}





