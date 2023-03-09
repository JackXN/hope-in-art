import React from 'react';

import {Box} from '@chakra-ui/react';

import Announcement from './Announcement';
import Intro from './Intro';




const InfoContainer = () => {
  return (
<Box padding={['15px']}
display='flex'
flexDirection={['column', 'column', 'row']}

>
  
  <Announcement/>
  <Intro/>
</Box>
  )
}

export default InfoContainer
