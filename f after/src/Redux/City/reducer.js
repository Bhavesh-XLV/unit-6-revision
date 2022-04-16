import axios from "axios";
import { ADD_CITY } from "./action";
import { addCity } from "./action";

const initState = {
  city: [],
};

const cityReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_CITY:
      return { ...state, city: [...payload] };
    default: {
      return state;
    }
  }
};

export const getMyCityMid = () => (dispatch) => {
  axios
    .get("http://localhost:3001/City")
    .then((res) => {
      dispatch(addCity(res.data));
    })
    .catch((err) => console.log(err.message));
};

export { cityReducer };
