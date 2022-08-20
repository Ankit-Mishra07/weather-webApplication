import { Box, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Chart from "react-apexcharts";
import { getLocal, setLocal } from "../../utils/local";
const API_KEY = "c0d290eeee9dd399b017a6d2ba64be7e";
const baseUrl = "https://api.openweathermap.org/data/2.5";
const TempGraph = () => {
  const [data, setData] = useState();
  const [time, setTime] = useState();
  const [temp, setTemp] = useState([]);
  const { CurrentCityData, ForcastData, isDataLoading, dataError } =
    useSelector((state) => state.weatherState);
  const times = [];
  const temps = [];
  const fetchHourly = async () => {
    const res = await fetch(
      `${baseUrl}/onecall?lat=${CurrentCityData.coord.lat}&lon=${CurrentCityData.coord.lat}&exclude=minutely&units=metric&appid=${API_KEY}`
    );
    const dat = await res.json();
    console.log(dat);
    setLocal("hourly_data", dat);
    setData(dat);
  };
  function timeArray(timeStamp) {
    let timer = new Date(timeStamp * 1000);
    return timer.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

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
        categories: time ? time : [],
      },
    },
    series: [
      {
        name: "Temprature",
        data: temp ? [...temp] : [],
      },
    ],
  };
  useEffect(() => {
    fetchHourly();
    getLocal("hourly_data")?.hourly.map((el, i) => {
      if (i < 12) {
        temps.push(el.temp);
        times.push(timeArray(el.dt));
      }
    });
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
