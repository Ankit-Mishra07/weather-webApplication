import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineReload } from "react-icons/ai";
const CityName = () => {
  const { CurrentCityData, ForcastData, isDataLoading, dataError } =
    useSelector((state) => state.weatherState);
  const [currentTime, setCurrentTime] = useState();
  const [currentDate, setCurrentDate] = useState();
  const [spin, setSpin] = useState(false);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    let lit = setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12 = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "PM" : "AM";
      let timeEl =
        (hoursIn12 < 10 ? "0" + hoursIn12 : hoursIn12) +
        ":" +
        (minutes < 10 ? "0" + minutes : minutes) +
        ` ` +
        `${ampm}`;
      setCurrentTime(timeEl);
      let dateEl = days[day] + ", " + date + " " + months[month];
      setCurrentDate(dateEl);

      return () => {
        clearInterval(lit);
      };
    }, 1000);
  }, [currentTime]);
  console.log(ForcastData);
  return (
    <Box className="custom__box" position={"relative"}>
      <AiOutlineReload
        className={`text__color ${spin && "spin"}`}
        style={{
          position: "absolute",
          top: 6,
          right: 6,
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
        }}
        onClick={() => {
          setSpin(true);
        }}
      />
      <Box>
        <Flex alignItems={"center"}>
          <Avatar
            src={
              CurrentCityData
                ? `http://openweathermap.org/img/wn/${CurrentCityData.weather[0].icon}@2x.png`
                : "http://openweathermap.org/img/wn/02d@2x.png"
            }
            width="60px"
            height="60px"
          />
          <Box ml="3">
            <Text fontWeight="semibold" className="text__color">
              {currentDate}
            </Text>
            <Badge ml="1" colorScheme="linkedin" p={1} borderRadius={5}>
              {currentTime}
            </Badge>
          </Box>
        </Flex>
        <Box textAlign={"center"}>
          <Text
            className="text__color"
            fontSize={["30px", "34px", "36px", "38px"]}
          >
            {(CurrentCityData.main.temp - 273).toString().substring(0, 5)} ℃
          </Text>
          <Text
            className="text__color"
            fontSize={["28px", "32px", "34px", "36px"]}
          >
            {CurrentCityData.name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(CityName);
