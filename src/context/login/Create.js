import React, { useState } from "react";
import logo from './loginImages/blueLumen.png';
import { Link as ReachLink, useNavigate } from "react-router-dom";
import {
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Box,
  Link,
  useMediaQuery,
  Image,
  Flex
} from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import axios from "axios";
import LoginLeft from "./LoginLeft";

export const Create = () => {
  const [isLargerThan] = useMediaQuery('(min-width: 880px)');
  const [userCreds, setUserCreds] = useState({});  
const navigate = useNavigate()
  const handleChange = (e) => {
     let { name, value } = e.target;
    setUserCreds({
      ...userCreds,
      [name]: value
    })   
  }

  const createSubmit = (e) => {
    e.preventDefault();   
    dataSet(userCreds);
  }

  const dataSet = async (form_data) => {  
      //let res = await axios.post('http://localhost:8001/createUserCreds',form_data);
      localStorage.setItem("loginDetails",JSON.stringify(form_data))
      navigate("login") 
  }

  return (
   <Flex> 
    <LoginLeft/>
    <Box w={ isLargerThan ? "45%" : "90%"} m='auto' ml={ isLargerThan ? '5%': ""} p="5">
     {isLargerThan ? '' : <Image src={logo} alt='logo' w='150px' mb='5'/>}
      <Text textAlign="left" fontSize={ isLargerThan ? "2.5vw": "4.5vw"} mt={isLargerThan?'-12':''} fontWeight="700">
         Get started with a free account
      </Text>
      <form onSubmit={createSubmit}>
        <FormControl fontSize="15" mt="10">
          <FormLabel>Full Name</FormLabel>
          <Input variant="flushed" type="text" borderColor="dark" id='fullname' name='fullname' onChange={handleChange} />
        </FormControl>
        <FormControl fontSize="15" mt="10">
          <FormLabel>Work Email</FormLabel>
          <Input variant="flushed" type="email" borderColor="dark" id='email' name='email' onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel mt="10">Password</FormLabel>
          <Input variant="flushed" type="password" borderColor="dark" id='password' name='password' onChange={handleChange} />
        </FormControl>

        <Button type="submit" w="100%" bg="blue" colorScheme='blue' color="#fff" borderRadius="25px" mt="10" p="6">
          Create account
        </Button>

      </form>

      <Button
        w="100%"
        border="2px solid blue"
        color="blue"
        bg="transparent"
        borderRadius="25px"        
        mt="10"
        p="6"
        leftIcon={<FaFacebookSquare />}
      >
        Sign up With Facebook
      </Button>      

      <Text textAlign="left" mt="10">
        Already have a Lumen5 account? <Link as={ReachLink} to='/login' color="blue">Login</Link>
      </Text>
      <Text textAlign='left' mt='2' fontSize='13'>By clicking “Create account” I agree to Lumen5’s 
      <Link>Terms of Use</Link> 
        and 
      <Link>Privacy Policy</Link>
      .</Text>
    </Box>
    </Flex>
  );
};


