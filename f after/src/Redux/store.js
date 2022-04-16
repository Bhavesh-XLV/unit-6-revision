import { combineReducers, createStore, applyMiddleware } from "redux";
import { cityReducer } from "./City/reducer";
import { countryReducer } from "./Country/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  city: cityReducer,
  country: countryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
