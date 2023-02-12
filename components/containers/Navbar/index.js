import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
} from "@chakra-ui/react";
import Image from 'next/image';
import { useRouter } from "next/router";



import {HamburgerIcon} from '@chakra-ui/icons';

import Logo from '../../../public/Logo.png'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(null);
  const router = useRouter();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colorMode === "light" ? "transparent" : "teal.500"}
      color="white"
      position="absolute"
      top={10}
      right={0}
      left={0}
      zIndex={4}
    >
      <Box display={{ sm: "block", md: "none" }} onClick={onOpen}>
        <IconButton
          icon={<HamburgerIcon/>}
          aria-label="Toggle navigation"
          color='black'
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.1)" }}
          onClick={() => setShow(!show)}
        />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={null}
      >
        <DrawerOverlay />
        <DrawerContent bg='#0E5E52'>
          <DrawerCloseButton />
          <DrawerBody display='flex' flexDirection='column' fontSize={'35px'} padding={'30px'} margin={'30px'} color='white' >
            <Link onClick={onClose} href='/'><a style={{textDecoration: 'none'}} className={router.pathname == '/' ? 'active' : ""} >Home</a></Link>
            <Link onClick={onClose} href='/about'><a className={router.pathname == '/about' ? 'active' : ""} >About</a></Link>
            <Link onClick={onClose} href='/gallery'><a className={router.pathname == '/gallery' ? 'active' : ""} >Gallery</a></Link>
            <Link onClick={onClose} href='/artists'><a className={router.pathname == '/artists' ? 'active' : ""} >Artists</a></Link>
            <Link onClick={onClose} href='/sponsors'><a className={router.pathname == '/sponsors' ? 'active' : ""} >Sponsors</a></Link>
            <Link onClick={onClose} href='/FAQ'><a className={router.pathname == 'faq' ? 'active' : ""} >FAQ</a></Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex align="center">
<Image src={Logo} alt='logo' style={{height: '80px', width:'80px'}}/>
      </Flex>
      <Box display={{ sm: "none", md: "block" }}>
        <IconButton
          icon="moon"
          display='none'
          onClick={toggleColorMode}
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.1)" }}
        />


      </Box>





    </Flex>
  );
};

export default Navbar;
