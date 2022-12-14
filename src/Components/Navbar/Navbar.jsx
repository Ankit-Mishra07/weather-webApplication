import { Flex, InputGroup, InputLeftAddon, Input, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CityCard from "../SearchedCityCard/CityCard";
import { useSelector, useDispatch } from "react-redux";
import {
  getWeatherBySearchData,
  weatherDataByCurrentLocation,
} from "../../Redux/Actions/weatherAction";
import { getLocal } from "../../utils/local";
import { BiCurrentLocation } from "react-icons/bi";
const Navbar = () => {
  const { isCityLoading, CityError, cityNames } = useSelector(
    (state) => state.cityState
  );
  const { CurrentCityData, ForcastData, isDataLoading, dataError } =
    useSelector((state) => state.weatherState);
  const [showSearched, setShowSearched] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleCardClick = (cityname, lati, longi) => {
    setShowSearched(false);
    setInput(cityname);
    dispatch(getWeatherBySearchData(lati, longi));
  };
  useEffect(() => {
    dispatch(weatherDataByCurrentLocation());
    setInput(getLocal("weather_data").getCurrentData.name);
  }, []);
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
          <InputLeftAddon
            children={
              <BiCurrentLocation
                color="#4d77ff"
                fontSize={20}
                cursor="pointer"
                onClick={() => {
                  dispatch(weatherDataByCurrentLocation());
                  setInput(CurrentCityData.name);
                  setTimeout(() => {
                    setInput(getLocal("weather_data").getCurrentData.name);
                  }, 1000);
                }}
              />
            }
            bg="whiteAlpha.700"
          />
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
            bg="white"
            zIndex={11}
          >
            {showSearched &&
              input &&
              cityNames
                .filter((el) => el.name.includes(input))
                .map(
                  (el, i) =>
                    i < 5 && (
                      <div key={i}>
                        <CityCard
                          citydata={el}
                          handleCardClick={handleCardClick}
                        />
                      </div>
                    )
                )}
          </Box>
        </InputGroup>
      </Flex>
    </>
  );
};

export default Navbar;
