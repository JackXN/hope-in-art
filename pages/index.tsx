import React, {useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {getProducts} from '../services/index';
import AOS from 'aos';
import {Box} from '@chakra-ui/react';


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
//! UPDATE BACKGROUND COLOR TO GRADIENT.
// ? linear-gradient(135deg, #E5DDE1 0%, #E0DCEA 100%)


const inter = Inter({ subsets: ['latin'] })
export default function Home() {

useEffect(() => {
  AOS.init({})
}, [])

  return (
    <>
      <Head>
        <title>HART - Hope In Art Association</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* AOS */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box padding='10px'>
          {/* <Navbar/> */}
          {/* <Hero/>
          <InfoContainer/>
          <WhatWeDo/>
          <ServiceContainer/>
          <ContributionSection/>
          <Showcase/>
          <ContactForm/>
          <Footer/> */}
          <ErrorPage/>
          {/* <Difference/> */}
        {/* <Background/> */}
          {/* <InfoSection/> */}
          {/* <AboutSection/> */}
          </Box>
      
    </>
  )
}





