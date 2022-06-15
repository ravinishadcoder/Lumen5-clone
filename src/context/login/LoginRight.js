import React from "react";
import logo from './loginImages/blueLumen.png';
import {
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Box,
  Link,
  useMediaQuery,
  Image
} from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";

const LoginRight = () => {
    const [isLargerThan] = useMediaQuery('(min-width: 880px)');


  return (
    <Box w={ isLargerThan ? "40%" : "90%"} m='auto' ml={ isLargerThan ? '5%': ""} p="5">
        {isLargerThan ? '' : <Image src={logo} alt='logo' w='150px' mb='5'/>}
      <Text textAlign="left" fontSize={ isLargerThan ? "2.5vw": "4.5vw"} mt={isLargerThan?'-12':''} fontWeight="700">
        Welcome back!
      </Text>

      <FormControl fontSize="15" mt="10">
        <FormLabel>Work Email</FormLabel>
        <Input variant="flushed" type="email" />
      </FormControl>
      <FormControl>
        <FormLabel mt="10">Password</FormLabel>
        <Input variant="flushed" type="password" />
      </FormControl>

      <Button w="100%" bg="blue" color="#fff" borderRadius="25px" mt="10" p="6">
        Login
      </Button>
      <Button
        w="100%"
        border="2px solid blue"
        color="blue"
        bg="none"
        borderRadius="25px"
        mt="10"
        p="6"
        leftIcon={<FaFacebookSquare />}
      >
        Login With Facebook
      </Button>
      <Button
        w="100%"
        border="1px solid blue"
        bg="none"
        color="blue"
        borderRadius="25px"
        mt="10"
        p="6"
      >
        🔑Log in via SSO
      </Button>

      <Text textAlign="left" mt="10">
        Need a Lumen5 account? <Link color="blue">Create an account</Link>
      </Text>
      © 2022 Lumen5
    </Box>
  );
};

export default LoginRight;
