import axios from "axios";
import React, { useState } from "react";

const Create = () => {
  const [data, setData] = useState({
    name: "",
    city: "",
    address: "",
    capacity: "",
    cost: "",
    verified: "",
    rating: "",
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
      .post("http://localhost:3001/boo", {
        Name: data.name,
        City: data.city,
        Address: data.address,
        Capacity: data.capacity,
        Cost_per_day: data.cost,
        Verified: data.verified,
        Rating: data.rating,
      })
      .then(() => {
        alert("Successful");
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          id="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter City"
          id="city"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Address"
          id="address"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter Capacity"
          id="capacity"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter Cost Per Day"
          id="cost"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Verified"
          id="verified"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter Rating"
          id="rating"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Create;
