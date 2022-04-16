import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [city, setCity] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    getCity();
  }, [city]);

  const getCity = () => {
    axios
      .get("http://localhost:3001/City")
      .then((res) => setCity(res.data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = () => {
    axios
      .get("http://localhost:3001/Country")
      .then((res) => setCountry(...country, res.data))
      .catch((err) => console.log(err.message));
  };

  const handleSortAsc = (e) => {
    e.preventDefault();
    var arr = city.sort((a, b) => a.population - b.population);
    setCity([...arr]);
    console.log(city);
    getCity();
  };
  const handleSortDec = () => {
    setCity([...city, city.sort((a, b) => b.population - a.population)]);
    console.log(city);
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
            {country.map((e) => (
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
            {city.map((e) => (
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
                      for (var i = 0; i < 100; i++) {
                        if (i == e.id) {
                          city.splice(i, 1);
                          console.log(city);
                          break;
                        }
                      }
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
