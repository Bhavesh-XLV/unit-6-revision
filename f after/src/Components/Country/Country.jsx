import axios from "axios";
import React, { useEffect, useState } from "react";

const Country = () => {
  const [data, setData] = useState({
    country: "",
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
      .post("http://localhost:3001/country", {
        country: data.country,
      })
      .then(() => {
        alert("Successful");
      })
      .catch(() => {
        alert("Something Went wrong");
      });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter Country"
          id="country"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
export default Country;
