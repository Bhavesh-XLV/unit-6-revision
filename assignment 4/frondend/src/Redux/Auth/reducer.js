import { AUTH } from "./action";

const initState = {
  auth: false,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH:
      return {
        payload,
      };
    default:
      return state;
  }
};

export { authReducer };
