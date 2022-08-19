import React from "react";
import { Box, Spinner } from "@chakra-ui/react";
const Loading = () => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"100vh"}
      justifyContent="center"
      alignItems={"center"}
      position={"fixed"}
      zIndex={10}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default Loading;
