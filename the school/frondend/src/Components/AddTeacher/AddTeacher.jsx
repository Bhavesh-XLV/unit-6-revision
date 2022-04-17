import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Login/Login.css";

const AddTeacher = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [data, setData] = useState({
    name: "",
    age: "",
    gender: "",
    classes: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setData({
      ...data,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/addteacher/${_id}`, {
        name: data.name,
        gender: data.gender,
        age: data.age,
        classes: data.classes,
      })
      .then(() => {
        alert("successful");
      })
      .catch(() => {
        alert("something went wrong");
      });
  };
  return (
    <div>
      <button
        style={{ marginTop: "20px" }}
        onClick={() => {
          navigate(`/${_id}`);
        }}
      >
        Click here to see table
      </button>
      <form className="Login">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={handleChange}
          id="name"
        />
        <input
          type="number"
          placeholder="Enter Age"
          onChange={handleChange}
          id="age"
        />
        <input
          type="text"
          placeholder="Enter Gender"
          onChange={handleChange}
          id="gender"
        />
        <input
          type="number"
          placeholder="Enter Classes"
          onChange={handleChange}
          id="classes"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default AddTeacher;
