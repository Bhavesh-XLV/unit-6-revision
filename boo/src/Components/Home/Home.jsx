import "../../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPetShop, getDataMid } from "../../Redux/AddPetShop/Action";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const myPet = useSelector((state) => state.addPet);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  useEffect(() => {
    getDataMiddle();
  }, []);

  const getDataMiddle = () => {
    dispatch(getDataMid());
  };

  const handleRatingLow = () => {
    let arr = myPet.sort((a, b) => a.Rating - b.Rating);
    dispatch(addPetShop(arr));
  };

  const handleRatingHigh = () => {
    let arr = myPet.sort((a, b) => b.Rating - a.Rating);
    dispatch(addPetShop(arr));
  };

  const handleCostLow = () => {
    let arr = myPet.sort((a, b) => a.Cost_per_day - b.Cost_per_day);
    dispatch(addPetShop(arr));
  };

  const handleCostHigh = () => {
    let arr = myPet.sort((a, b) => b.Cost_per_day - a.Cost_per_day);
    dispatch(addPetShop(arr));
  };

  const handleChange = (e) => {
    axios
      .get(`http://localhost:3001/boo?q=${e.target.value}`)
      .then((res) => {
        dispatch(addPetShop(res.data));
      })
      .catch((err) => alert("Sorry! Something went wrong"));
  };

  const handleVerified = () => {
    const arr = [];
    axios
      .get(`http://localhost:3001/boo`)
      .then((res) => {
        res.data.filter((e) => {
          if (e.Verified == "Yes") {
            arr.push(e);
          }
        });
        dispatch(addPetShop(arr));
      })
      .catch((err) => alert("Sorry! Something went wrong"));
  };
  return (
    <div className="App">
      <input type="text" onChange={handleChange} placeholder="Search Here" />
      <div>
        <button onClick={handleRatingLow}>Rating Low</button>
        <button onClick={handleRatingHigh}>Rating High</button>
        <button onClick={handleCostLow}>Cost/Day Low</button>
        <button onClick={handleCostHigh}>Cost/Day High</button>
        <button onClick={handleVerified}>Verified</button>
      </div>
      <table border="1" style={{ margin: "auto", marginTop: "50px" }}>
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>City</td>
            <td>Address</td>
            <td>Capacity</td>
            <td>Cost per day</td>
            <td>Verified</td>
            <td>Rating</td>
          </tr>
        </thead>
        <tbody>
          {myPet.map((e) => (
            <tr
              key={e.id}
              onClick={() => {
                navigate(`/listing/${e.id}`);
              }}
            >
              <td>{e.id}</td>
              <td>{e.Name}</td>
              <td>{e.City}</td>
              <td>{e.Address}</td>
              <td>{e.Capacity}</td>
              <td>{e.Cost_per_day}</td>
              <td>{e.Verified}</td>
              <td>{e.Rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
{
  /* <tr>
                  
                </tr> */
}

export default Home;
