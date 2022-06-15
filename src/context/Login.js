import React from 'react'
import LoginLeft from './login/LoginLeft';
import LoginRight from './login/LoginRight';
import Create from './login/Create'


import {
    Flex
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Flex>
      <LoginLeft/>
      {/* <LoginRight/> */}
      <Create/>
    </Flex>
  )
}

export default Login
