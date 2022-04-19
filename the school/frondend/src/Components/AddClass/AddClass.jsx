import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Login/Login.css";

const AddClass = () => {
  const navigate = useNavigate();
  const { teacher_id } = useParams();
  const [data, setData] = useState({
    class_time: "",
    subject: "",
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

    // console.log(data);
    axios
      .post(`http://localhost:4000/addClass/${teacher_id}`, {
        teacher_id,
        class_time: data.class_time,
        subject: data.subject,
      })
      .then((res) => {
        console.log(res.data);
        alert("successful");
      })
      .catch(() => {
        alert("something went wrong");
      });
  };
  return (
    <div>
      {/* <button
        style={{ marginTop: "20px" }}
        onClick={() => {
          navigate(`/${_id}`);
        }}
      >
        Click here to see table
      </button> */}
      <form className="Login">
        <input
          type="text"
          placeholder="Enter Class Time"
          onChange={handleChange}
          id="class_time"
        />
        <input
          type="text"
          placeholder="Enter Subject"
          onChange={handleChange}
          id="subject"
        />
      </form>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => {
            navigate(`/getClass/${teacher_id}`);
          }}
        >
          Back
        </button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddClass;
