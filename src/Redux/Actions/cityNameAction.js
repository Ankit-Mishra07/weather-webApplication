import { getCityNames } from "../../FetchRequests/getCities";
import {
  CITY_FAIL,
  CITY_REQUEST,
  CITY_SUCCESS,
  CURRENT_CITY,
} from "../ActionTypes/cityNameActionTypes";

export const getCityAction = () => (dispatch) => {
  try {
    dispatch({ type: CITY_REQUEST });
    const getCityName = getCityNames();
    dispatch({ type: CITY_SUCCESS, getCityName });
  } catch (error) {
    dispatch({ type: CITY_FAIL });
  }
};
export const getCurrentCityAction = (data) => (dispatch) => {
  try {
    dispatch({ type: CITY_REQUEST });
    dispatch({ type: CURRENT_CITY, data });
  } catch (error) {
    dispatch({ type: CITY_FAIL });
  }
};
