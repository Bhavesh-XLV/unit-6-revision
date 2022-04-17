import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addClass } from "../../Redux/ADDClass/action";
import { useDispatch, useSelector } from "react-redux";

const ClassList = () => {
  let { _id } = useParams();
  const Class = useSelector((state) => state.class.class);
  const dispatch = useDispatch();

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
  console.log(Class);
  return (
    <div>
      {Class.map((e) => (
        <div key={e._id}>
          {e.class_time} {e.subject}
        </div>
      ))}
    </div>
  );
};

export default ClassList;
