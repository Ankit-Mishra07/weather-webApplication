import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cityNameReducer } from "./Reducers/cityNameReducer";
import { weatherDataReducer } from "./Reducers/weatherDataReducer";
const rootReducer = combineReducers({
  cityState: cityNameReducer,
  weatherState: weatherDataReducer,
});
const middlewares = [thunk];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
