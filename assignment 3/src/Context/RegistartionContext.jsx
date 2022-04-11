import axios from "axios";
import React, { createContext, useReducer } from "react";

export const RegistartionContext = createContext();

const initState = {
  name: "",
  age: "",
  date_of_birth: "",
  state_of_residence: "",
  address: "",
  pincode: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "CHANGE_NAME":
      return { ...state, name: payload };
    case "CHANGE_AGE":
      return { ...state, age: payload };
    case "CHANGE_DOB":
      return { ...state, date_of_birth: payload };
    case "CHANGE_SOR":
      return { ...state, state_of_residence: payload };
    case "CHANGE_ADDRESS":
      return { ...state, address: payload };
    case "CHANGE_PINCODE":
      return { ...state, pincode: payload };
    default:
      throw new Error();
  }
}

const RegistartionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/users", state)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };

  const { name, age, date_of_birth, state_of_residence, address, pincode } =
    state;

  return (
    <div>
      <RegistartionContext.Provider
        value={{
          name,
          age,
          date_of_birth,
          state_of_residence,
          address,
          pincode,
          dispatch,
          handleSubmit,
        }}
      >
        {children}
      </RegistartionContext.Provider>
    </div>
  );
};

export default RegistartionContextProvider;
