import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { toast } from "react-toastify";
const Error = () => {
  toast("Something went wrong, please try again later!");
  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"100vh"}
      justifyContent="center"
      alignItems={"center"}
      position={"fixed"}
      zIndex={10}
      bg="white"
    >
      <Flex
        direction={"column"}
        justifyContent="center"
        width="50%"
        alignItems={"center"}
      >
        <img src="errors.gif" alt="" width="100%" height={500} />
        <br />
        <Button bg="red.400" color="white">
          <a href="/">Try Again</a>
        </Button>
      </Flex>
    </Box>
  );
};

export default Error;
