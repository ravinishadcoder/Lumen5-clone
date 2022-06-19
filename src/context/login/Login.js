import React, { useState } from "react";
import logo from "./loginImages/blueLumen.png";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import {
  Button,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Link,
  useMediaQuery,
  Image,
  Flex,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  
  useDisclosure,
  AlertDialogCloseButton,
} from '@chakra-ui/react'
import { FaFacebookSquare } from "react-icons/fa";
import LoginLeft from "./LoginLeft";
import { useDispatch } from "react-redux";
import { loginAPI } from "../../store/action";
import { Alert } from "../../general/Alert";

export const Login = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  const [isLargerThan] = useMediaQuery("(min-width: 880px)");
  const [userDetail, setUserDetail] = useState({});
  const [saveDetail, setSaveDetail] = useState([]);
  const dispatch = useDispatch();
  const obj = JSON.parse(localStorage.getItem("loginDetails"));
  // console.log(obj)
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetail({
      ...userDetail,
      [name]: value,
    });
  };

  const loginSubmit = (e) => {
    // console.log(userDetail)
    e.preventDefault();
    setSaveDetail([...saveDetail, userDetail]);
   if(obj==null){
    onOpen()
   
   }else{
    dispatch(loginAPI());
    navigate("/");
   }
    
  };

  return (<>
   
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader>User Not Exist!</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Please! SignUp First.
            </AlertDialogBody>
            <AlertDialogFooter>
              
              
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

    <Flex>
      
      <LoginLeft />
      <Box
        w={isLargerThan ? "50%" : "90%"}
        m="auto"
        ml={isLargerThan ? "5%" : ""}
        p="5"
      >
        {isLargerThan ? "" : <Image src={logo} alt="logo" w="150px" mb="5" />}
        <Text
          textAlign="left"
          fontSize={isLargerThan ? "2.5vw" : "4.5vw"}
          mt={isLargerThan ? "-12" : ""}
          fontWeight="700"
        >
          Welcome back!
        </Text>
        {/* form start */}
        <form onSubmit={loginSubmit}>
          <FormControl fontSize="15" mt="10">
            <FormLabel htmlFor="name">Work Email</FormLabel>
            <Input
              onChange={handleChange}
              id="email"
              name="email"
              variant="flushed"
              borderColor="dark"
              type="email"
            />
            <FormErrorMessage>error message</FormErrorMessage>

            <FormLabel mt="10">Password</FormLabel>
            <Input
              onChange={handleChange}
              id="password"
              name="password"
              variant="flushed"
              borderColor="dark"
              type="password"
            />
          </FormControl>

          <Button
            type="submit"
            w="100%"
            bg="blue"
            colorScheme="blue"
            color="#fff"
            borderRadius="25px"
            mt="10"
            p="6"
          >
            Submit
          </Button>
        </form>
        {/* form ends */}
        <Button
          w="100%"
          border="2px solid blue"
          color="blue"
          bg="none"
          borderRadius="25px"
          colorScheme="transparent"
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
          colorScheme="transparent"
          mt="10"
          p="6"
        >
          🔑Log in via SSO
        </Button>
        <Text textAlign="left" mt="10">
          Need a Lumen5 account?{" "}
          <Link as={ReachLink} to="/create" color="blue">
            Create an account
          </Link>
        </Text>
        © 2022 Lumen5
      </Box>
    </Flex>
    </>
  );
};
