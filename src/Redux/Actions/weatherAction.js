import {
  fetchForcastData,
  fetchWeatherDataByLocation,
} from "../../FetchRequests/FetchWeatherData";
import { setLocal } from "../../utils/local";
import {
  WEATHER_DATA_FAIL,
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
} from "../ActionTypes/weatherActionTypes";

export const weatherDataByCurrentLocation = () => (dispatch) => {
  try {
    dispatch({ type: WEATHER_DATA_REQUEST });
    navigator.geolocation.getCurrentPosition(success, error);

    async function success(position) {
      const { latitude, longitude } = position.coords;
      const getCurrentData = await fetchWeatherDataByLocation(
        latitude,
        longitude
      );

      const data = await fetchForcastData(latitude, longitude);
      const weatherForcastData = data;
      const payload = { getCurrentData, weatherForcastData };
      dispatch({ type: WEATHER_DATA_SUCCESS, payload });
      setLocal("weather_data", payload);
    }

    async function error() {
      dispatch({
        type: WEATHER_DATA_FAIL,
        error: "Please allow access for location",
      });
    }
  } catch (error) {
    dispatch({
      type: WEATHER_DATA_FAIL,
      error: "Something went wrong, please again later",
    });
  }
};
