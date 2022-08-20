import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CityName from "../Components/CityNameTemp/CityName";
import Navbar from "../Components/Navbar/Navbar";
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
        templateColumns={["100%", "100%", "50%", "30%"]}
        width="90%"
        margin={"auto"}
      >
        <CityName />
      </Grid>
    </>
  );
};

export default MainPage;
