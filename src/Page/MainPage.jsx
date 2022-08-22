import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CityName from "../Components/CityNameTemp/CityName";
import Descriptive from "../Components/DescriptiveDataCard/Descriptive";
import ForCastedData from "../Components/ForCastedData/ForCastedData";
import Loading from "../Components/Loading/Loading";
import Map from "../Components/Map/Map";
import Navbar from "../Components/Navbar/Navbar";
import SunGraph from "../Components/SunGraph/SunGraph";
import TempGraph from "../Components/TemperatureGraph/TempGraph";
import { weatherDataByCurrentLocation } from "../Redux/Actions/weatherAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getLocal } from "../utils/local";
import Error from "../Components/Error/Error";

const MainPage = () => {
  const { CurrentCityData, ForcastData, isDataLoading, dataError } =
    useSelector((state) => state.weatherState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(weatherDataByCurrentLocation());
  }, []);
  return (
    <>
      <ToastContainer />
      {isDataLoading && <Loading />}
      {dataError !== false && <Error />}
      {CurrentCityData && ForcastData && getLocal("weather_data") && (
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
          <br />
          <br />
          <ForCastedData />
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default MainPage;
