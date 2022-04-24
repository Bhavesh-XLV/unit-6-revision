import { createStore, applyMiddleware } from "redux";
import { petReducer } from "./AddPetShop/Reducer";
import thunk from "redux-thunk";

const store = createStore(petReducer, applyMiddleware(thunk));

export { store };
