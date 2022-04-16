import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../../Redux/City/action";
import { getCountryMid } from "../../Redux/Country/reducer";
import { getMyCityMid } from "../../Redux/City/reducer";

const Home = () => {
  const myCountry = useSelector((state) => state.country.country);
  const myCity = useSelector((state) => state.city.city);

  const disptach = useDispatch();

  useEffect(() => {
    getMyCityMiddle();
  }, []);

  const getMyCityMiddle = () => {
    disptach(getMyCityMid());
  };

  useEffect(() => {
    getCountryMiddle();
  }, []);

  const getCountryMiddle = () => {
    disptach(getCountryMid());
  };

  const handleSortAsc = () => {
    let arr = myCity.sort((a, b) => a.population - b.population);
    disptach(addCity(arr));
  };

  const handleSortDec = () => {
    let arr = myCity.sort((a, b) => b.population - a.population);
    disptach(addCity(arr));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/City/${id}`)
      .then(() => getMyCityMiddle());
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "30%",
          border: "2px solid black",
          textAlign: "center",
        }}
      >
        <h1>List of Countries</h1>
        <table border="1" style={{ margin: "auto" }}>
          <thead>
            <td>id</td>
            <td>Country</td>
          </thead>
          <tbody>
            {myCountry.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{ width: "70%", border: "2px solid black", textAlign: "center" }}
      >
        <h1>List of City with population</h1>
        <button onClick={handleSortAsc}>Low To High</button>
        <button onClick={handleSortDec}>High To Low</button>
        <table border="1" style={{ margin: "auto" }}>
          <thead>
            <td>id</td>
            <td>Country</td>
            <td>City</td>
            <td>Population</td>
            <td>Edit</td>
            <td>Delete</td>
          </thead>
          <tbody>
            {myCity.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.country}</td>
                <td>{e.city}</td>
                <td>{e.population}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(e.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
