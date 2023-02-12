import React, {useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {getProducts} from '../services/index';
import AOS from 'aos';



// Components
import Navbar from '../components/containers/Navbar/index';
import Hero from '../components/containers/Hero/index';
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
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Navbar/>
          <Hero/>

      
    </>
  )
}





