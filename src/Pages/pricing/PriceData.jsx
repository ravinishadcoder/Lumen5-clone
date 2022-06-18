import React from "react";
import styles from "./priceData.module.css";
import { Box, Button, Center, Flex, Square, Text } from "@chakra-ui/react";
import { Avatar, Stack, useColorModeValue } from "@chakra-ui/react";
const PriceData = ({ id, imgUrl, blog, name }) => {
  return (
    <Center py={6}>
      <Box
        maxW={"350px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        rounded={"md"}
        className={styles.cardData}
      >
        <Flex justify={"center"} mt={-12} className={styles.cardBox}>
          <Avatar
            size={"xl"}
            src={imgUrl}
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Text color={"gray.500"}>{blog}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontSize={"sm"} color={"gray.500"}>
                {name}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export default PriceData;
