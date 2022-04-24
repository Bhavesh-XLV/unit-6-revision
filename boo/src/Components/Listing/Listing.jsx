import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleMid } from "../../Redux/AddPetShop/Action";

const Listing = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  // const myPet = useSelector((state) => state.addPet);
  // console.log(myPet);
  // const dispatch = useDispatch();

  useEffect(() => {
    // getSingleMiddle();
    getData();
  }, []);

  const getData = () => {
    axios.get(`http://localhost:3001/boo/3`).then((res) => {
      setData(res.data);
      // dispatch(addPetShop(res.data));
    });
  };
  console.log("daa", data);
  return (
    <div>
      <h2>
        <span> Name:</span> {data.Name}
      </h2>
      <h2>
        <span> City:</span> {data.City}
      </h2>
      <h2>
        <span> Address:</span> {data.Address}
      </h2>
      <h2>
        <span> Capacity:</span> {data.Capacity}
      </h2>
      <h2>
        <span> Cost Per Day:</span> {data.Cost_per_day}
      </h2>
      <h2>
        <span> Rating:</span> {data.Rating}
      </h2>
    </div>
  );
};

export default Listing;
