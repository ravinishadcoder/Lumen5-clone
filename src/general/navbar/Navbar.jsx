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
              <Flex w="400px" p="3" justify="space-between">
                <Box lineHeight="8">
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </Box>

                <Box lineHeight="8">
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
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
