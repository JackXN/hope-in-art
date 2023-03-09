import React from 'react';

import {Box} from '@chakra-ui/react';

import Announcement from './Announcement';
import Intro from './Intro';




const InfoContainer = () => {
  return (
    <div
    style={{
      padding: ['15px'],
    }}
    >

  <Intro/>
  <Announcement/>
    </div>
  )
}

export default InfoContainer
