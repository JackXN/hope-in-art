import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
    Text,
    FormHelperText,
    Image
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
  import { MdEmail, MdOutlineEmail } from "react-icons/md";
//   import emailjs from "@emailjs/browser";
  
  const confetti = {
    light: {
      primary: "4299E1", // blue.400
      secondary: "BEE3F8" // blue.100
    },
  
    dark: {
      primary: "1A365D", // blue.900
      secondary: "2A4365" // blue.800
    }
  };
  export default function ContactUs() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    const [input, setInput] = useState("");
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
  
    //   emailjs
    //     .sendForm(
    //       "service_oqrvcyb",
    //       "template_n6rh0an",
    //       e.target,
    //       "wELH_zZcMIDEW6eMb"
    //     )
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
  
    return (
      <Box sx={styles.wrapper} id='contact'>
        <Box sx={styles.container} mb="200px">
          <Box sx={styles.leftSideContainer} data-aos='flip-left' data-aos-delay='20' data-aos-duration='2000'>
            <Text as="h1">Get In Touch With Us Today!</Text>
            <Text as="p">
            Are you passionate about making a difference in your community? We welcome you to get in touch with us to learn more about our organizations initiatives and how you can help us create a positive impact. 
            </Text>
    {/* <Image src='./EventsImage.png' alt='Pink Lady Image Hope In Art'/>  */}
            {/* <Text as="p">t_ptransport@yahoo.com</Text> */}
            {/* <Text as="p">Tel: 385-394-7953 / 385-302-4843</Text> */}
          </Box>
          <Box sx={styles.rightSideContainer} data-aos='flip-right' data-aos-delay='20' data-aos-duration='2000'>
            <FormControl width="50%"> 
              {/* <Text as="h2" color="orange">
                Let Us Know What You Think!
              </Text> */}
              <FormLabel mt="35px" color="black">
                Full Name
              </FormLabel>
              <Input type="name" name="name" color="white" />
              <FormLabel mt="35px" color="black">
                Email Address
              </FormLabel>
              <Input
                type="email"
                name="user_email"
                required={true}
                color="white"
              />
              <FormHelperText>We will never share your email</FormHelperText>
  
              <FormLabel mt="35px" color="black">
                Subject
              </FormLabel>
              <Input required={true} name="user_reviews" color="black" />
  
              <FormLabel mt="20px" color="black">
                Message
              </FormLabel>
              <Textarea
                required={true}
                type="text"
                borderTop="none"
                borderRight="none"
                borderLeft="none"
                borderBottom="solid gray 1px"
                name="message"
                color="black"
              />
            </FormControl>
            <Button mt={["20px"]} type="submit" value="send">
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
  
  const styles = {
    wrapper: {
      position: 'relative',
      bottom: ['290px']
    },
    container: {
      display: "flex",
      flexDirection: ["column", "column", "column", "column", "row"],
      height: ["100%", "100%", "100%", "50%"],
      padding: ["16px", "16px", "16px", "25px"]
    },
  
    leftSideContainer: {
      flex: 3,
      backgroundColor: '#3E6AA6',
      padding: ['20px', '20px', '20px', '20px', '50px'],
      borderRadius: '10px',
      // backgroundImage: './ContactFormImage.png',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
      // boxShadow: "10px 3px 6px 8px gray",
      

    Image: {
       
    },
      h1: {
        color: "white",
        textAlign: "left",
        fontFamily: "Poppins",
        fontWeight: "bold",
        // fontSize: ["55px", "28px", "28px", "28px", "28px", '38px'],
        fontSize: ['28px','28px','28px','28px','67px'],
        textAlign: 'left',
        textTransform: 'uppercase',

        mt: ['50px'],
      },
  
      p: {
        background: "none !important",
        textAlign: "left",
        color: "white",
        width: "90% !important",
        mt: ["30px"],
        mb: ["30px"],
        fontFamily: "Catamaran",
        fontSize: "21px"
      }
    },
  
    rightSideContainer: {
      flex: 3,
      // background: 'white !important',
      boxShadow: "10px 8px 15px 10px #1D1D1D",
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
     
  
      // padding: '50px',
      h2: {
        fontFamily: "Lato",
        fontSize: ["24px", "24px", "24px", "34px"],
        color: "#ffff",
        // pb: "30px",
        mt: "30px",
        color: 'black',
      },
  
      Button: {
        mt: "50px"
      },
  
      Input: {
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "1px solid gray"
      },
  
      FormLabel: {
        color: "white !important"
      }
    },
  
    formContainer: {
      display: "flex"
    },
    Textarea: {
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      borderBottom: "1px solid gray"
    }
  };
  