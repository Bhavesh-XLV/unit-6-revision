import { ADD_PET_SHOP } from "./Action";

const initState = {
  addPet: [],
};

export const petReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_PET_SHOP:
      return { ...state, addPet: [...payload] };
    default:
      return state;
  }
};
