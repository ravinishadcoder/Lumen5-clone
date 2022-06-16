import React from "react";
import logo2 from "../navbar/navbarImages/bluelumen.png";
import { createList } from "./navConstants";
import { createList2 } from "./navConstants";
// import { Link as ReachLink } from "react-router-dom";
import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  Spacer,
  Menu,
  Link,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";


export const Navbar = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const navigate = useNavigate();

  const signUp = () => {
    navigate('create');
  }

  const login = () => {
   navigate('login');
  }

  const home = () => {
    navigate('/')
  }


  return (
    <>  
      {isLargerThan1280 ? (
        <Flex h="100px">
          <Flex justify="left" align="center" ml="5%">
            <Image h="45%" src={logo2} alt="Lumen5" onClick={home} cursor='pointer' />
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
                <Flex w="500px" p="3" justify="space-between">
                  <Box lineHeight="8">
                    {createList.map((e) => (
                      <MenuList key={e.id} textAlign="left" border="none" cursor='pointer'>
                        {e.name}
                      </MenuList>
                    ))}
                  </Box>

                  <Box lineHeight="8">
                    {createList2.map((e) => (
                      <MenuList key={e.id} textAlign="left" border="none" cursor='pointer'>
                        {e.name}
                      </MenuList>
                    ))}
                  </Box>
                </Flex>
              </MenuList>
            </Menu>
            <Text><Link as={ReachLink} to='pricing' textDecoration='none'>Pricing</Link></Text>
            <Text><Link as={ReachLink} to='enterprise'>Enterprise</Link></Text>
            <Text><Link as={ReachLink} to='casestudies'>Case studies</Link></Text>

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
              onClick={login}
            >
              Login
            </Button>
            <Button bg="blue" borderRadius="30px" p="25px 20px" onClick={signUp}>
              Sign Up
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Flex justify="space-evenly" align="center" padding="5">
          <Flex>
            <Image h="9" src={logo2} alt="Lumen5" />
          </Flex>
          <Spacer />

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList w='100vw'>
            <Menu>
              <MenuButton
                bg="transparent"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Create
              </MenuButton>

              <MenuList p='3' lineHeight='1'>          
                    {createList.map((e) => (
                      <MenuList key={e.id} textAlign="left" border="none" cursor='pointer'>
                        {e.name}
                      </MenuList>
                    ))}               
                    {createList2.map((e) => (
                      <MenuList key={e.id} textAlign="left" border="none" cursor='pointer'>
                        {e.name}
                      </MenuList>
                    ))}             
              </MenuList>
            </Menu>

              <Text><Link as={ReachLink} to='pricing'>Pricing</Link></Text>
              <Text><Link as={ReachLink} to='enterprise'>Enterprise</Link></Text>
              <Text><Link as={ReachLink} to='casestudies'>Case studies</Link></Text>
              
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
            <Box>
            <Button
              bg="transparen"
              borderRadius="30px"
              border="2px solid blue"
              color="blue"
              p="25px 20px"  
              onClick={login}            
            >
              Login
            </Button>
            <Button bg="blue" borderRadius="30px" p="25px 20px" ml='3' onClick={signUp}>
              Sign Up
            </Button>
            </Box>
            </MenuList>            
          </Menu>
          
        </Flex>
      )}

   
    </>
  );
};


