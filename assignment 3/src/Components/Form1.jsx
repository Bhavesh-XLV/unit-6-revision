import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RegistartionContext } from "../Context/RegistartionContext";

const Form1 = () => {
  const navigate = useNavigate();
  const { name, age, date_of_birth, dispatch } =
    useContext(RegistartionContext);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            dispatch({ type: "CHANGE_NAME", payload: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) =>
            dispatch({ type: "CHANGE_AGE", payload: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type="date"
          placeholder="Enter Date"
          value={date_of_birth}
          onChange={(e) =>
            dispatch({ type: "CHANGE_DOB", payload: e.target.value })
          }
        />
      </div>
      <div>
        <button
          disabled={!name || !age || !date_of_birth}
          onClick={() => {
            navigate("/registration/two");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Form1;
