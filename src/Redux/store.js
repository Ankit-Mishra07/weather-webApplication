import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cityNameReducer } from "./Reducers/cityNameReducer";
const rootReducer = combineReducers({
  cityState: cityNameReducer,
});
const middlewares = [thunk];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
