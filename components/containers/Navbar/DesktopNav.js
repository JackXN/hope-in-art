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
    <header class="relative z-20 w-full flex justify-between items-center h-20">
    {/* <a href="#" class="text-3xl text-gray-100 leading-tight">Un-<br />cover</a> */}

    <ul className="flex text-sm text-white capitalize body-font font-Poppins">
        <li>
            <Link
               activeClass="active"
               to="home"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
               style={{ fontFamily: "Montserrat", cursor: "pointer " }}

            
            
            > Home</Link>
        </li>
        <li class="ml-4">
            <a href="#">About</a>
        </li>
        <li class="ml-4">
            <a href="#">Services</a>
        </li>
        <li class="ml-4">
            <a href="">Contact</a>
        </li>
    </ul>
</header>
  )

};

export default DesktopNav;