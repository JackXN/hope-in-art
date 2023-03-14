import React from 'react';

import {Box,Text,Image, StylesProvider} from '@chakra-ui/react';

const ErrorPage = () => {
  return (
  <Box
  height='500px'
  display='flex'
  justifyContent='center'
  alignItems='center'
  >

    <Box textAlign='center'>
<Image src='./HartLogo.png'/>

<Text as='h1' fontFamily='LATO' mt='30px'>Error Code: <span style={{color: 'teal', fontWeight:'bold'}}>503</span></Text>
<Text as='p'></Text>
</Box>
  </Box>
  )
}

export default ErrorPage
