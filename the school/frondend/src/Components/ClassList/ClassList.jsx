import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { addClass } from "../../Redux/ADDClass/action";
import { useDispatch, useSelector } from "react-redux";

const ClassList = () => {
  let { _id } = useParams();
  const Class = useSelector((state) => state.class.class);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getClass();
  }, []);

  const getClass = () => {
    axios
      .get(`http://localhost:4000/getClass/${_id}`)
      .then((res) => {
        dispatch(addClass(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button
        onClick={() => {
          navigate(`/addClass/${_id}`);
        }}
        style={{ marginTop: "15px" }}
      >
        Add Class
      </button>

      <table border="1" style={{ margin: "auto", marginTop: "15px" }}>
        <thead>
          <tr>
            <td>Class Time</td>
            <td>Subject</td>
          </tr>
        </thead>
        <tbody>
          {Class.map((e) => (
            <tr key={e._id}>
              <td>{e.class_time}</td>
              <td>{e.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassList;
