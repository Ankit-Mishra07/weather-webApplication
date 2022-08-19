import { getCityNames } from "../../FetchRequests/getCities";
import {
  CITY_FAIL,
  CITY_REQUEST,
  CITY_SUCCESS,
} from "../ActionTypes/cityNameActionTypes";

const init = {
  isCityLoading: false,
  cityNames: getCityNames() || [],
  CityError: false,
  currentCityName: "Lucknow",
};

export const cityNameReducer = (state = init, { type, payload }) => {
  switch (type) {
    case CITY_REQUEST:
      return { ...state, isCityLoading: true };
    case CITY_SUCCESS:
      return { isCityLoading: false, cityNames: payload };
    case CURRENT_CITY:
      return { currentCityName: payload };
    case CITY_FAIL:
      return { ...state, isCityLoading: true, CityError: true };
    default:
      return state;
  }
};
