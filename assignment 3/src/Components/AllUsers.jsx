import axios from "axios";
import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [data, setDaTa] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3001/users").then((res) => setDaTa(res.data));
  };
  return (
    <div>
      {data.map((e) => (
        <div key={e.id}>
          <span>{e.name}</span>
          <span>{e.age}</span>
          <span>{e.date_of_birth}</span>
          <span>{e.state_of_residence}</span>
          <span>{e.address}</span>
          <span>{e.pincode}</span>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
