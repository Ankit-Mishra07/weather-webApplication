import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Map = () => {
  const googleMapAPI = "AIzaSyAq15HbfCRMW7RqNb5LUNyOLyfzpYI0wl4";
  const { CurrentCityData, ForcastData, isDataLoading, dataError } =
    useSelector((state) => state.weatherState);
  return (
    <Box borderRadius={10} className="custom__box" h={300}>
      <iframe
        width="100%"
        height="280px"
        loading="lazy"
        allowFullScreen
        style={{ borderRadius: "10px" }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&q=${CurrentCityData.name}`}
      ></iframe>
    </Box>
  );
};

export default Map;
