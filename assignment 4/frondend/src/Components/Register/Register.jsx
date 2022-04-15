import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAuth } from "../../Redux/Auth/action.js";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:3456/register", {
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then(() => {
        alert("successful");
        dispatch(addAuth("true"));
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter UserName"
          id="username"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          id="email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Register;
