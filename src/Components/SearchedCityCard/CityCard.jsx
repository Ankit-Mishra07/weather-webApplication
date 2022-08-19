import React from "react";
import { Box } from "@chakra-ui/react";
const CityCard = ({ citydata, handleCardClick }) => {
  return (
    <>
      <Box
        bg="whiteAlpha.700"
        w="100%"
        p={2}
        color="gray.500"
        boxShadow={
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        }
        borderRadius={5}
        cursor={"pointer"}
        onClick={() => handleCardClick(citydata.name)}
      >
        {citydata.name}
      </Box>
    </>
  );
};

export default CityCard;
