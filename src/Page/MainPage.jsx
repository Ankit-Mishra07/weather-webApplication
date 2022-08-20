import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CityName from "../Components/CityNameTemp/CityName";
import Descriptive from "../Components/DescriptiveDataCard/Descriptive";
import Map from "../Components/Map/Map";
import Navbar from "../Components/Navbar/Navbar";
import SunGraph from "../Components/SunGraph/SunGraph";
import TempGraph from "../Components/TemperatureGraph/TempGraph";
import { weatherDataByCurrentLocation } from "../Redux/Actions/weatherAction";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(weatherDataByCurrentLocation());
  }, []);
  return (
    <>
      <Navbar />
      <br />
      <Grid
        templateColumns={["100%", "100%", "50% 50%", "repeat(3, 1fr)"]}
        width="90%"
        margin={"auto"}
        gap={10}
      >
        <CityName />
        <Descriptive />
        <Map />
      </Grid>
      <br />
      <br />
      <Grid
        templateColumns={["100%", "100%", "100%", "repeat(2, 1fr)"]}
        width="90%"
        margin={"auto"}
        gap={10}
      >
        <SunGraph />
        <TempGraph />
      </Grid>
    </>
  );
};

export default MainPage;
