import React from "react";
import { Heading, Box, Center } from "@chakra-ui/react";
import "./report.css";
import { useNavigate } from "react-router-dom";
const Report = () => {
  let navigate = useNavigate();
  function navi() {
    navigate("/reportprob");
  }
  return (
    <Center
      className="pointer"
      boxShadow="dark-lg"
      bg="tomato"
      h="5rem"
      color="white"
      ml="5"
      mt="10"
      mr="5"
      mb="5"
      borderRadius={10}
      onClick={navi}
    >
      <Box
        as="button"
        borderRadius="md"
        bg="tomato"
        color="white"
        px={4}
        h={9}
        m="auto"
        onClick={navi}
      >
        <Heading>Report A Problem </Heading>
      </Box>
    </Center>
  );
};

export default Report;
