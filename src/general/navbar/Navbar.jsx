import React from 'react';
import logo2 from "../navbar/navbarImages/bluelumen.png";
import {
    Flex,
    Box,    
    Text,    
    Image,
    Button,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react";
  import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
   <>
    {/* Navbar starts here */}
    <Flex h="100px">
        <Flex justify="left" align="center" ml="5%">
          <Image h="45%" src={logo2} alt="Lumen5" />
        </Flex>
        <Spacer />
        <Flex w="50%" justify="space-between" align="center" p="10">
          <Menu>
            <MenuButton
              bg="transparent"              
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Create
            </MenuButton>

            <MenuList>
              <Flex w="450px" p="3" justify="space-between">
              <Box lineHeight="8">
                  <MenuItem>Photo Video Maker</MenuItem>
                  <MenuItem>Facebook Video Maker</MenuItem>
                  <MenuItem>YouTube Intro Maker</MenuItem>
                  <MenuItem>Instagram Video Maker</MenuItem>
                  <MenuItem>Instagram Story Maker</MenuItem>
                  <MenuItem>Promo Video Maker</MenuItem>
                  <MenuItem>Video Ad Maker</MenuItem>
                  <MenuItem>Marketing Video Maker</MenuItem>
                </Box>

                <Box lineHeight="8">
                  <MenuItem>LinkedIn Video Maker</MenuItem>
                  <MenuItem>Business Video Maker</MenuItem>
                  <MenuItem>Ecommerce Video Maker</MenuItem>
                  <MenuItem>Explainer Video Maker</MenuItem>
                  <MenuItem>Slideshow Maker</MenuItem>
                  <MenuItem>Education Video Maker</MenuItem>
                  <MenuItem>Video Editor</MenuItem>
                  <MenuItem>Voiceover</MenuItem>
                </Box>
              </Flex>
            </MenuList>
          </Menu>

          <Text>Pricing</Text>
          <Text>Enterprise</Text>
          <Text>Case studies</Text>

          <Menu>
            <MenuButton
              bg="transparent"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Learn
            </MenuButton>
            <MenuList>
              <MenuItem>Resources</MenuItem>
              <MenuItem>Blog</MenuItem>
            </MenuList>
          </Menu>

          <Button
            bg="transparen"
            borderRadius="30px"
            border="2px solid blue"
            color="blue"
            p="25px 20px"
          >
            Login
          </Button>
          <Button bg="blue" borderRadius="30px" p="25px 20px">
            Sign Up
          </Button>
        </Flex>
      </Flex>

      {/* Navbar ends here */}
   
   </>
  )
}

export default Navbar
