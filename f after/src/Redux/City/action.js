export const ADD_CITY = "ADD_CITY";

export const addCity = (payload) => {
  return {
    type: ADD_CITY,
    payload,
  };
};
