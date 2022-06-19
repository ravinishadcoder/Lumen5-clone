import React from "react";
import logo from "./loginImages/bgImage.png";
import log from "./loginImages/whiteLumen.png";
import cisco from "./loginImages/cisco.png";
import kpmg from "./loginImages/kpmg.png";
import merck from "./loginImages/merck.png";
import sales from "./loginImages/sales.png";
import sap from "./loginImages/sap.png";
import siemens from "./loginImages/siemens.png";

import { Box, Image, Flex, Text, useMediaQuery } from "@chakra-ui/react";

const LoginLeft = () => {
    const [isLargerThan] = useMediaQuery('(min-width: 880px)');
  return (
    <>
    { isLargerThan ? 
      <Box w='35%' border='1px solid'  >
        {/* h63% */}
        <Image src={logo} w='35%' h='100vh' alt="leftbgLogo" position="absolute" />

        <Image w='40%'ml='25px' mt='5px' src={log} alt="logo" position="relative" />

        <Box w='80%' ml='25px' color='#fff' textAlign='left' position='relative'>
          <Text fontSize='55' fontWeight='500' >Supercharge your content strategy</Text>
          <Text fontSize='36' fontWeight='300' mt='3'>Join 800,000+ brands creating videos with Lumen5</Text>
        </Box>

        <Flex w="90%" mt='8' flexWrap="wrap" justify='center' align='center' gap='7' position="relative">
          <Image src={cisco} w='100px' alt="cisco" />
          <Image src={kpmg} w='100px' alt="kpmg" />
          <Image src={merck} w='100px' alt="merck" />
          <Image src={sales} w='100px' alt="sales" />
          <Image src={sap} w='100px' alt="sap" />
          <Image src={siemens} w='100px' alt="siemens" />
        </Flex>
      </Box>
      : 
      "" }
    </>
  );
};

export default LoginLeft;
