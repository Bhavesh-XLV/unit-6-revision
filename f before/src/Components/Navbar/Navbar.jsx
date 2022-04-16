import React from "react";
import "../../../src/App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="App">
      <Link to="/" style={{ marginRight: "50px" }}>
        Home
      </Link>
      <Link to="/add-country" style={{ marginRight: "50px" }}>
        Add Country
      </Link>
      <Link to="/add-city">Add City</Link>
    </div>
  );
};

export default Navbar;
