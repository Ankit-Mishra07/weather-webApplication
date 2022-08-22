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
import { toast } from "react-toastify";

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
      const weatherForcastData = data.daily;
      if (data.cod >= 400) {
        dispatch({
          type: WEATHER_DATA_FAIL,
          error: "Something went wrong, please again later",
        });
        return;
      }
      const payload = { getCurrentData, weatherForcastData };
      console.log("action", data);
      setLocal("weather_data", payload);
      dispatch({ type: WEATHER_DATA_SUCCESS, payload });
      toast.success("Weather data of your location fetched successfully!");
    }

    async function error() {
      dispatch({
        type: WEATHER_DATA_FAIL,
        error: "Please allow access for location",
      });
      toast.error("Something went wrong not able to detect location");
    }
  } catch (error) {
    dispatch({
      type: WEATHER_DATA_FAIL,
      error: "Something went wrong, please again later",
    });
    toast.error("Something went wrong, please again later");
  }
};

export const getWeatherBySearchData =
  (latitude, longitude) => async (dispatch) => {
    try {
      dispatch({ type: WEATHER_DATA_REQUEST });
      const getCurrentData = await fetchWeatherDataByLocation(
        latitude,
        longitude
      );

      const data = await fetchForcastData(latitude, longitude);
      const weatherForcastData = data.daily;
      if (data.cod >= 400) {
        dispatch({
          type: WEATHER_DATA_FAIL,
          error: "Something went wrong, please again later",
        });
        return;
      }
      const payload = { getCurrentData, weatherForcastData };
      setLocal("weather_data", payload);
      dispatch({ type: WEATHER_DATA_SUCCESS, payload });
      toast.success("Weather data of your search result fetched successfully!");
    } catch (error) {
      dispatch({
        type: WEATHER_DATA_FAIL,
        error: "Something went wrong, please again later",
      });
      toast.error("Something went wrong, please again later");
    }
  };
