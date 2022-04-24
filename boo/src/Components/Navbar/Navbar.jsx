import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" style={{ marginRight: "40px" }}>
        Home
      </Link>
      <Link to="/listing/create">Create</Link>
    </div>
  );
};

export default Navbar;
