import React from "react";
import { Avatar, Badge, Box, Center, Grid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const temp = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "",
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

const ForCastedData = () => {
  const { CurrentCityData, ForcastData, isDataLoading, dataError } =
    useSelector((state) => state.weatherState);

  const getDayName = (timeStamp) => {
    let dayname = new Date(timeStamp * 1000).toDateString().split(" ");
    let monthno = months.indexOf(dayname[1]);
    let day = days[temp.indexOf(dayname[0])];
    let date = dayname[2];
    let year = dayname[3];
    return { day, monthno, date, year };
  };

  return (
    <>
      <Grid
        templateColumns={[
          "100%",
          "50% 50%",
          "repeat(4, 25%)",
          "repeat(8, 1fr)",
        ]}
        width="90%"
        margin={"auto"}
        gap={5}
      >
        {ForcastData.map((elem, index) =>
          index === 0 ? (
            <Box
              className="custom__box"
              padding={"5px"}
              cursor="pointer"
              border={"3px solid #4d77ff"}
              key={index}
            >
              <Box bg={"#4d77ff"} borderRadius={5} textAlign="center">
                <Text color={"white"} m={0} p={0}>
                  {getDayName(elem.dt).date}/
                  {getDayName(elem.dt).monthno <= 9
                    ? `0${getDayName(elem.dt).monthno}`
                    : getDayName(elem.dt).monthno}
                  /{getDayName(elem.dt).year}
                </Text>
                <Text m={0} p={0} color={"white"}>
                  {getDayName(elem.dt).day}
                </Text>
              </Box>
              <Center m={1}>
                <Avatar
                  src={
                    elem
                      ? `http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`
                      : "http://openweathermap.org/img/wn/02d@2x.png"
                  }
                  width="60px"
                  height="60px"
                />{" "}
              </Center>
              <Center
                m={0}
                color="#4d77ff"
                p={0}
                letterSpacing={1}
                fontSize={"16px"}
                fontWeight={"bold"}
              >
                {elem.weather[0].main}
              </Center>
              <Center gap="10px" marginTop={2}>
                <BsFillSunFill fontSize={24} color="#4d77ff" />{" "}
                <span
                  style={{
                    fontSize: "20px",
                    color: "#4d77ff",
                    fontWeight: "bold",
                  }}
                >
                  {elem.temp.day} ℃
                </span>
              </Center>
              <Center gap="10px" marginTop={2}>
                <BsFillMoonFill fontSize={20} color="#4d77ff" />{" "}
                <span
                  style={{
                    fontSize: "20px",
                    color: "#4d77ff",
                    fontWeight: "bold",
                  }}
                >
                  {elem.temp.night} ℃
                </span>
              </Center>
            </Box>
          ) : (
            <Box
              className="custom__box"
              padding={"5px"}
              cursor="pointer"
              key={index}
            >
              <Box bg={"#4d77ff"} borderRadius={5} textAlign="center">
                <Text color={"white"} m={0} p={0}>
                  {getDayName(elem.dt).date}/
                  {getDayName(elem.dt).monthno <= 9
                    ? `0${getDayName(elem.dt).monthno}`
                    : getDayName(elem.dt).monthno}
                  /{getDayName(elem.dt).year}
                </Text>
                <Text m={0} p={0} color={"white"}>
                  {getDayName(elem.dt).day}
                </Text>
              </Box>
              <Center m={1}>
                <Avatar
                  src={
                    elem
                      ? `http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`
                      : "http://openweathermap.org/img/wn/02d@2x.png"
                  }
                  width="60px"
                  height="60px"
                />{" "}
              </Center>
              <Center
                m={0}
                color="#4d77ff"
                p={0}
                letterSpacing={1}
                fontSize={"16px"}
                fontWeight={"bold"}
              >
                {elem.weather[0].main}
              </Center>
              <Center gap="10px" marginTop={2}>
                <BsFillSunFill fontSize={24} color="#4d77ff" />{" "}
                <span
                  style={{
                    fontSize: "20px",
                    color: "#4d77ff",
                    fontWeight: "bold",
                  }}
                >
                  {elem.temp.day} ℃
                </span>
              </Center>
              <Center gap="10px" marginTop={2}>
                <BsFillMoonFill fontSize={20} color="#4d77ff" />{" "}
                <span
                  style={{
                    fontSize: "20px",
                    color: "#4d77ff",
                    fontWeight: "bold",
                  }}
                >
                  {elem.temp.night} ℃
                </span>
              </Center>
            </Box>
          )
        )}
      </Grid>
    </>
  );
};

export default ForCastedData;
