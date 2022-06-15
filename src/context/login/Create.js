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
         Get started with a free account
      </Text>

      <FormControl fontSize="15" mt="10">
        <FormLabel>Full Name</FormLabel>
        <Input variant="flushed" type="text" />
      </FormControl>
      <FormControl fontSize="15" mt="10">
        <FormLabel>Work Email</FormLabel>
        <Input variant="flushed" type="email" />
      </FormControl>
      <FormControl>
        <FormLabel mt="10">Password</FormLabel>
        <Input variant="flushed" type="password" />
      </FormControl>

      <Button w="100%" bg="blue" color="#fff" borderRadius="25px" mt="10" p="6">
        Create account
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
        Sign up With Facebook
      </Button>      

      <Text textAlign="left" mt="10">
        Already have a Lumen5 account? <Link color="blue">Login</Link>
      </Text>
      <Text textAlign='left' mt='2' fontSize='13'>By clicking “Create account” I agree to Lumen5’s 
   <Link>Terms of Use</Link> 
and 
<Link>Privacy Policy</Link>
.</Text>
    </Box>
  );
};

export default LoginRight;
