import React from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";

const Navbar = () => {
  return (
    <div className="App">
      <Link to="/" style={{ marginRight: "50px" }}>
        Home
      </Link>
      <Link to="/register" style={{ marginRight: "50px" }}>
        Register
      </Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
