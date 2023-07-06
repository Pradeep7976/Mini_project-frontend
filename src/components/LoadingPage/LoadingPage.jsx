import React from "react";
import { RingLoader } from "react-spinners";
import { Flex, Center } from "@chakra-ui/react";

const LoadingScreen = () => {
  return (
    <Flex height="100vh">
      <Center width="100%">
        <RingLoader size={100} color="#e62e00" />
      </Center>
    </Flex>
  );
};

export default LoadingScreen;
