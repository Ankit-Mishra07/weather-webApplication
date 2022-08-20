import React from "react";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import { Box, Flex, Text } from "@chakra-ui/react";
const SunGraph = () => {
  const { CurrentCityData, ForcastData, isDataLoading, dataError } =
    useSelector((state) => state.weatherState);
  const ChangeTimeFormat = (timeStamp) => {
    let timer = new Date(timeStamp * 1000);
    return timer.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };
  const obj = {
    options: {
      chart: {
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },

      xaxis: {
        lines: { show: false },
        categories: [
          `${ChangeTimeFormat(ForcastData[0].sunrise)
            .toString()
            .substring(0, 1)} AM`,
          "1 PM",
          "4 PM",
          `${ChangeTimeFormat(ForcastData[0].sunset)
            .toString()
            .substring(0, 1)} PM`,
        ],
      },
      yaxis: {
        show: false,
      },

      grid: {
        show: true,
      },

      colors: ["#4d77ff"],
    },
    series: [
      {
        name: "Temprature",
        data: [
          ForcastData[0].temp.min,
          ForcastData[0].temp.max,
          ForcastData[0].temp.eve,
          ForcastData[0].temp.night,
        ],
      },
    ],
  };
  return (
    <Box className="custom__box" h={400}>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Text className="text__color">Sunrise</Text>
          <Text className="text__color" fontSize={12}>
            {ChangeTimeFormat(ForcastData[0].sunrise)}
          </Text>
        </Box>
        <Box>
          <Text className="text__color">Sunset</Text>
          <Text className="text__color" fontSize={12}>
            {ChangeTimeFormat(ForcastData[0].sunset)}
          </Text>
        </Box>
      </Flex>
      <Chart
        options={obj.options}
        series={obj.series}
        type="area"
        height="300px"
        margin="auto"
      />
    </Box>
  );
};

export default SunGraph;
