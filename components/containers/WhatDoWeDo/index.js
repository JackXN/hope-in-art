import React from 'react';

import {Box, Text, Image, Button} from '@chakra-ui/react';



import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Lorem
  } from '@chakra-ui/react'

const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

return (
<Box sx={styles.wrapper} id='about'>
<Box sx={styles.container}>
  {/* <Text as='h1'>What We Do</Text> */}
<Box sx={styles.content}>
<Box sx={styles.leftContent}>
    <Text as='h1' data-aos='fade-down' data-aos-duration='1000' data-aos-delay='100'>We Help People Heal <br/> Through Their Own <br/> Creative Process</Text>
    <Text as='p' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='100'>
    Our mission is to empower women in crisis housing by providing access to art classes and supplies. We believe that creative expression is a powerful tool for healing and personal growth, and we aim to provide a safe and supportive environment where women can explore their creativity, build confidence, and develop new skills. Through our programs, we strive to help women develop a positive self-image, cultivate a sense of community, and find joy in the artistic process. Our goal is to create a pathway to healing and transformation for women in shelters, and to inspire them to unlock their creative potential and build a brighter future for themselves and their families.
    </Text>
{/* PUT MODAL HERE */}
    <Button sx={styles.readMoreButton} onClick={onOpen} data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>Read Our Full Mission Statement</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily='Lato' fontWeight='bold' mt='30px'>The Hope In Art Mission Statement</ModalHeader>
          <ModalCloseButton />
       <Text as='p' padding='30px'>Our mission is to empower women in crisis housing by providing access to art classes and supplies. We believe that creative expression is a powerful tool for healing and personal growth, and we aim to provide a safe and supportive environment where women can explore their creativity, build confidence, and develop new skills. 
       Through our programs, we strive to help women develop a positive self-image, cultivate a sense of community, and find joy in the artistic process. Our goal is to create a pathway to healing and transformation for women in shelters, and to inspire them to unlock their creative potential and build a brighter future for themselves and their families.
       </Text>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
</Box>
<Box sx={styles.rightContent} data-aos='fade-in' data-aos-duration='1000' data-aos-delay='100'>
    <Image src={'./AboutUsImage.png'} alt='What We Do' 
    mt={[null,null,null,'285px']}
    
    />
</Box>
</Box>
</Box>
</Box>
  )
}


const styles = {
    wrapper: {
        // mt: ['100px'],
        position: 'relative',
        bottom:'200px',
        left: [null,null,null,'5%']
        
      
        
    },

    container: {
// mt: ['100px'],
display: 'flex',
textAlign: 'left',
// backgroundImage: './WhatWeDoBanner.jpeg',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
// padding: ['60px'],
borderRadius: '20px',
// height: '100%',
// height: ['500px'],



h1: {
    fontSize: '28px',
    fontFamily: 'Poppins',
color: 'black',
fontWeight: 'bold',
display: 'flex',

mt: ['150px', null, null, null, '0px']

}
    },

    content: {
        mt: ['125px', null, null ,null ,0],
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'row'],
        padding: ['30px'],
        p: {
            fontFamily: 'Source Sans Pro',

        }
    },


    leftContent: {

        flex: 3,
        h1: {
            fontSize: ['28px'],
            fontFamily: 'Poppins',
            fontWeight: 'bolder',
           
        },

        p: {
            mt: ['30px'],
            fontSize: ['16px'],
            
        },

        Button: {
            mt: ['53px'],
            
        },
    },

    rightContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: ['100%'],
        content: '""',
        // background: 'orange',
    //   width: '600px',
      position: 'relative',
      bottom: [null,null,null,'145px', '200px', '400px'],
    //   left: [null,null,null,null,'90px'],
    //   right: ['120px']
    flex: 4,


   
    }
}
export default Index;
