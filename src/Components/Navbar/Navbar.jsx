import { Flex, InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        bg="blue.50"
        p={2}
        justifyContent="center"
      >
        <InputGroup width="80%" bg="whiteAlpha.700">
          <InputLeftAddon children="City" bg="whiteAlpha.700" />
          <Input type="text" placeholder="Search..." />
        </InputGroup>
      </Flex>
    </>
  );
};

export default Navbar;
