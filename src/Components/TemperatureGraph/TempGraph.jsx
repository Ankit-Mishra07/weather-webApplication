import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchDataForHourly } from "../../FetchRequests/FetchWeatherData";
import { graphObj } from "./GraphObject.js";
import Chart from "react-apexcharts";
const TempGraph = () => {
  const [data, setData] = useState();
  const [time, setTime] = useState();
  const [temp, setTemp] = useState();
  const { CurrentCityData, ForcastData, isDataLoading, dataError } =
    useSelector((state) => state.weatherState);
  const times = [];
  const temps = [];
  const fetchHourly = async () => {
    let dat = await fetchDataForHourly(
      CurrentCityData.coord.lat,
      CurrentCityData.coord.lon
    );
    setData(dat);
    console.log(data);
  };
  function timeArray(timeStamp) {
    let timer = new Date(timeStamp * 1000);
    return timer.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }
  data &&
    data.hourly.reverse().map((el, i) => {
      if (i < 12) {
        temps.push(el.temp);
        times.push(timeArray(el.dt));
      }
    });
  const obj = {
    options: {
      chart: {
        id: "basic-bar",
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },
      xaxis: {
        categories: time,
      },
    },
    series: [
      {
        name: "Temprature",
        data: temp,
      },
    ],
  };
  useEffect(() => {
    (async function () {
      await fetchHourly();
    })();
    setTemp(temps);
    setTime(times);
  }, []);
  return (
    <Box className="custom__box" h={400}>
      <Center className="text__color" fontWeight={500}>
        Temperature
      </Center>
      <Box className="chart__parent">
        <Chart
          options={obj?.options}
          series={obj?.series}
          type="area"
          width="700px"
          height="300px"
        />
      </Box>
    </Box>
  );
};

export default TempGraph;
