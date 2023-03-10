import React from 'react';

import {Box} from '@chakra-ui/react';

import Announcement from './Announcement';
import Intro from './Intro';




const InfoContainer = () => {
  return (
<Box padding={['15px', null, null, '60px', '190px']}
display='flex'
flexDirection={['column', 'column', 'row-reverse']}
position='relative'
top={[null, null,null,'-20px', '-150px']}
>
<Intro/>
  <Announcement/>
  
</Box>
  )
}

export default InfoContainer
