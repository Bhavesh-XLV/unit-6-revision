import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
  };

  const handleSubmmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:4000/login", {
        school_name: data.school_name,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        const x = res.data.user._id;
        navigate(`/${x}`);
      })
      .catch((err) => alert("Please enter valid detail"));
  };
  return (
    <div className="Log">
      <form>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={handleChange}
            id="email"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={handleChange}
            id="password"
          />
        </div>
        <button onClick={handleSubmmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
