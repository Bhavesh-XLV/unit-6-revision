export const ADD_COUNTRY = "ADD_COUNTRY";

export const addCountry = (payload) => {
  return {
    type: ADD_COUNTRY,
    payload,
  };
};
