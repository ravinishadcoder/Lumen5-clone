import React from 'react'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export const Home = () => {
  const data= useSelector((state)=>state)
 // console.log(data)
  return (
    <Box h='100vh' bg='tomato' >
      <h1>Home</h1>
    </Box>
  )
}

