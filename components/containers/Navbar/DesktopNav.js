import React from "react";
import * as Scroll from "react-scroll";
import {
  Box,
  Text,
  Link,
  Image,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";

const DesktopNav = () => {
  const Link = Scroll.Link;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.navContainer}>
        <UnorderedList
          style={{ listStyle: "none", justifyContent: "space-between" }}
          display={["none", "none", "none", "flex"]}
          justifyContent="center"
          alignItems="center"
        >
          <ListItem>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              style={{ fontFamily: "Montserrat", cursor: "pointer !important" }}
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
              style={{ fontFamily: "Montserrat", cursor: "pointer !important" }}
            >
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
              style={{ fontFamily: "Montserrat", cursor: "pointer !important" }}
            >
              Submissions Gallery
            </Link>
          </ListItem>
          <ListItem>
            <Image src={"./Logo.png"} alt="Logo" height="80px" width="80px" />
          </ListItem>
          <ListItem>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
              style={{ fontFamily: "Montserrat", cursor: "pointer !important" }}
            >
              Services
            </Link>
          </ListItem>
          <ListItem>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
              style={{ fontFamily: "Montserrat", cursor: "pointer !important" }}
            >
              Contact Us
            </Link>
          </ListItem>
          <ListItem>
            <a href="./">FAQ</a>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

const styles = {
  wrapper: {
    height: "10%"
  },
  navContainer: {
    position: "relative",
    // top: ["100px", "100px", "100px", "100px", "125px"],
    top: ['300px'],
    pl: ["90px", "90px", "90px", "4rem", "4rem", "10rem"],
    pr: ["90px", "90px", "90px", "4rem", "4rem", "10rem"],
    a: {
      color: "black",
      fontSize: ["16px", "16px", "16px", "16px", "19px"]
    },
    UnorderedList: {}
  }
};

export default DesktopNav;