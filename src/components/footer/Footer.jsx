import logo from "../footer/footerImages/whitelumen.png";

import {
  Flex,
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,  
} from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"400"} fontSize={"lg"} mb={2} color="#fff">
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <>
     

      {/* Footer starts here */}
      <Box bg={"gray.800"} color={useColorModeValue("gray.400", "gray.400")}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid templateColumns="repeat(5, 1fr)" spacing={5}>
            <Stack spacing={1}>
              <Box>
                <Image src={logo} height={20} width={32} />
                {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
              </Box>
              <Text fontSize={"md"} textAlign={"left"} color={"gray.200"}>
                Lumen5 combines powerful A.I. with a simple drag-and-drop
                interface to help you create professional video content in
                minutes.
              </Text>
            </Stack>

            <Stack></Stack>

            <Stack align={"flex-start"}>
              <ListHeader>EXPLORE</ListHeader>
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Features</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>LinkedIn</Link>
              <Link href={"#"}>Support</Link>
              <Link href={"#"}>Community group</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>VIDEO TOOLS</ListHeader>
              <Link href={"#"}>Add Text to Video</Link>
              <Link href={"#"}>Cut Video</Link>
              <Link href={"#"}>Merge Video</Link>
              <Link href={"#"}>Compress Video</Link>
              <Link href={"#"}>Resize Video</Link>
              <Link href={"#"}>See all</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>VIDEO CREATORS</ListHeader>
              <Link href={"#"}>Video Editor</Link>
              <Link href={"#"}>Photo Video Maker</Link>
              <Link href={"#"}>Facebook Video Maker</Link>
              <Link href={"#"}>YouTuber Intro</Link>
              <Link href={"#"}>Instagram Video Maker</Link>
              <Link href={"#"}>See all</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Flex
        justify={"space-between"}
        borderBottom="-100%"
        bg={"gray.900"}
        p={"5"}
        color='gray.200'
      >
        <Box>
          <Text>Copyright © 2022 Lumen5</Text>
        </Box>

        <Box>
          <Text>Terms of Use & Privacy Policy</Text>
        </Box>
      </Flex>
      {/* Footer ends here */}
    </>
  );
};

