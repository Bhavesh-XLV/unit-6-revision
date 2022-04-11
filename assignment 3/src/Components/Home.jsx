import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/" style={{ marginRight: "50px" }}>
        Home
      </Link>
      <Link to="/registration/one" style={{ marginRight: "50px" }}>
        Create User
      </Link>
      <Link to="/users" style={{ marginRight: "50px" }}>
        All users
      </Link>
    </div>
  );
};

export default Home;
