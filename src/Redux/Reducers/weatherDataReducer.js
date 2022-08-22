import { getLocal } from "../../utils/local";
import {
  WEATHER_DATA_FAIL,
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
} from "../ActionTypes/weatherActionTypes";

const init = {
  CurrentCityData: getLocal("weather_data")
    ? getLocal("weather_data").getCurrentData
    : {},
  ForcastData: getLocal("weather_data")
    ? getLocal("weather_data").weatherForcastData
    : [],
  isDataLoading: getLocal("weather_data") ? false : true,
  dataError: false,
};

export const weatherDataReducer = (state = init, { type, payload }) => {
  switch (type) {
    case WEATHER_DATA_REQUEST:
      return { ...state, isDataLoading: true };
    case WEATHER_DATA_SUCCESS:
      return {
        ...state,
        isDataLoading: false,
        dataError: false,
        CurrentCityData: payload.getCurrentData,
        ForcastData: payload.weatherForcastData,
      };
    case WEATHER_DATA_FAIL:
      return {
        ...state,
        isDataLoading: false,
        dataError: payload,
      };
    default:
      return state;
  }
};
