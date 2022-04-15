import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {auth === "false"
        ? navigate("/register")
        : data.map((e) => (
            <div
              key={e.id}
              style={{
                border: "2px solid black",
                width: "31%",
                textAlign: "center",
                margin: "1%",
              }}
            >
              <div>
                <img src={e.image} alt="" width={"300px"} height={"300px"} />
              </div>
              <div>{e.title}</div>
            </div>
          ))}
    </div>
  );
};

export default Home;
