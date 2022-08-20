import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
const SmallCard = ({ name, value }) => (
  <Box
    bg="whiteAlpha.700"
    w="100%"
    padding={"6px 20px"}
    color="gray.500"
    boxShadow={
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
    }
    borderRadius={5}
    cursor={"pointer"}
    display="flex"
    justifyContent={"space-between"}
    backgroundImage="linear-gradient(to bottom right, rgb(102, 102, 252), #15f3f3)"
  >
    <Text fontWeight={500} color="white">
      {name} :
    </Text>
    <Text color="blackAlpha.800">{value}</Text>
  </Box>
);
const Descriptive = () => {
  const { CurrentCityData, ForcastData, isDataLoading, dataError } =
    useSelector((state) => state.weatherState);
  return (
    <Box className={"custom__box"} h={300}>
      <VStack spacing={2}>
        <SmallCard
          name={"Feel Temp."}
          value={`${(CurrentCityData.main.temp - 273)
            .toString()
            .substring(0, 5)} ℃`}
        />
        <SmallCard
          name={"Humidity"}
          value={`${CurrentCityData.main.humidity}%`}
        />
        <SmallCard
          name={"Wind speed"}
          value={`${CurrentCityData.wind.speed} Km/h`}
        />
        <SmallCard
          name={"Visibility"}
          value={`${Math.floor(CurrentCityData.visibility / 1000)}.00 Km`}
        />
        <SmallCard
          name={"Min Temp."}
          value={`${(CurrentCityData.main.temp_min - 273)
            .toString()
            .substring(0, 5)} ℃`}
        />
        <SmallCard
          name={"Max Temp."}
          value={`${(CurrentCityData.main.temp_max - 273)
            .toString()
            .substring(0, 5)} ℃`}
        />
      </VStack>
    </Box>
  );
};

export default Descriptive;
