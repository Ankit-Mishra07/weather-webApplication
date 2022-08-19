import { Flex, InputGroup, InputLeftAddon, Input, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import CityCard from "../SearchedCityCard/CityCard";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [showSearched, setShowSearched] = useState(false);
  const [input, setInput] = useState();
  const { isCityLoading, CityError, cityNames } = useSelector(
    (state) => state.cityState
  );
  console.log(cityNames);
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
        <InputGroup
          width={["80%", "80%", "80%", "60%"]}
          bg="whiteAlpha.700"
          position="relative"
        >
          <InputLeftAddon children="City" bg="whiteAlpha.700" />
          <Input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setShowSearched(true);
              setInput(e.target.value);
            }}
            value={input}
          />
          <Box
            position="absolute"
            left={0}
            right={0}
            top="12"
            display={"flex"}
            flexDirection={"column"}
            gap={2}
          >
            {showSearched &&
              input &&
              cityNames
                .filter((el) => el.name.includes(input))
                .map(
                  (el, i) =>
                    i < 5 && (
                      <>
                        <CityCard citydata={el} />
                      </>
                    )
                )}
          </Box>
        </InputGroup>
      </Flex>
    </>
  );
};

export default Navbar;
