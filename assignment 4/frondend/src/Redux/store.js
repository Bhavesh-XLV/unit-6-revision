import { createStore } from "redux";
import { authReducer } from "./Auth/reducer";

export const store = createStore(authReducer);
