import axios from "axios";
import React, { useState } from "react";

const Login = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:3456/login", {
        email: data.email,
        password: data.password,
      })
      .then(() => {
        alert("succesful");
      })
      .catch(() => {
        alert("please enter valid credential");
      });
  };
  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Enter Register Email"
          onChange={handleChange}
          id="email"
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handleChange}
          id="password"
        />
        <br />
        <button onClick={handleSubmit}>Log-in</button>
      </form>
    </div>
  );
};

export default Login;
