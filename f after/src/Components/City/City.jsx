import axios from "axios";
import React, { useState } from "react";

const City = () => {
  const [data, setData] = useState({
    country: "",
    city: "",
    population: "",
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
      .post("http://localhost:3001/City", {
        country: data.country,
        city: data.city,
        population: data.population,
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
        <input
          type="text"
          placeholder="Enter City"
          id="city"
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Population"
          id="population"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default City;
