export const AUTH = "AUTH";

export const addAuth = (payload) => {
  return {
    type: AUTH,
    payload,
  };
};
