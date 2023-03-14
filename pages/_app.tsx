import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import {extendTheme} from '@chakra-ui/react';
import customTheme from '../theme/index';

const theme = customTheme;







export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
   <ChakraProvider theme={theme}>
    <Component {...pageProps}/>
   </ChakraProvider>
    </>
  )
}
