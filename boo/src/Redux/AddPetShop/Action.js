import axios from "axios";

export const ADD_PET_SHOP = "ADD_PET_SHOP";

export const addPetShop = (payload) => {
  return {
    type: ADD_PET_SHOP,
    payload,
  };
};

export const getDataMid = () => (dispatch) => {
  axios
    .get("http://localhost:3001/boo")
    .then((res) => {
      dispatch(addPetShop(res.data));
    })
    .catch((err) => alert("Sorry! Something went wrong"));
};

export const getSingleMid = (id) => (dispatch) => {
  console.log("id", id);
  axios.get(`http://localhost:3001/boo/${id}`).then((res) => {
    console.log(res.data);
    dispatch(addPetShop(res.data));
  });
  // .catch((err) => alert("Sorry! Something went wrong"));
};
