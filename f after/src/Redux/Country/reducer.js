import axios from "axios";
import { ADD_COUNTRY } from "./action";
import { addCountry } from "./action";

const initState = {
  country: [],
};

const countryReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_COUNTRY:
      return { ...state, country: [...payload] };
    default: {
      return state;
    }
  }
};

const getCountryMid = () => (dispatch) => {
  axios
    .get("http://localhost:3001/Country")
    .then((res) => {
      dispatch(addCountry(res.data));
    })
    .catch((err) => console.log(err.message));
};

export { countryReducer, getCountryMid };
