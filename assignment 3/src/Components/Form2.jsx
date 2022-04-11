import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { RegistartionContext } from "../Context/RegistartionContext";

const Form2 = () => {
  const {
    name,
    age,
    date_of_birth,
    state_of_residence,
    address,
    pincode,
    dispatch,
    handleSubmit,
  } = useContext(RegistartionContext);

  if (!name || !age || !date_of_birth) {
    return <Navigate to="/registration/one" />;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="State of residence"
          value={state_of_residence}
          onChange={(e) =>
            dispatch({ type: "CHANGE_SOR", payload: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => {
            dispatch({ type: "CHANGE_ADDRESS", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => {
            dispatch({ type: "CHANGE_PINCODE", payload: e.target.value });
          }}
        />
      </div>
      <div>
        <button
          disabled={!state_of_residence || !address || !pincode}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form2;
