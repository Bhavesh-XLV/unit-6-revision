import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({ m: 0, s: 0 });
  const [getTime, setGetTime] = useState("");
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  let updatedM = time.m,
    updatedS = time.s;
  const reset = () => {
    clearInterval(interv);
    setTime({ m: 0, s: 0 });
    setStatus(0);
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const start = () => {
    const arr = getTime;
    if (arr.length == 2) {
      var sec = arr[arr.length - 2] + arr[arr.length - 1];
    } else if (arr.length == 3) {
      var sec = arr[arr.length - 2] + arr[arr.length - 1];
      var min = 0 + arr[arr.length - 3];
    } else if (arr.length == 4) {
      var sec = arr[arr.length - 2] + arr[arr.length - 1];
      var min = arr[arr.length - 4] + "" + arr[arr.length - 3];
    } else {
      alert("please enter valid time");
      return;
    }
    if (min > 60 || sec > 60) {
      alert("please enter valid time");
      return;
    }
    updatedM = min;
    updatedS = sec;
    setStatus(1);
    run();
    setInterv(setInterval(run, 1000));
  };

  const run = () => {
    // if (updatedM == 0 && updatedS == 0) {
    //   return;
    // }
    if (updatedS == 1) {
      updatedS = 59;
      updatedM--;
    } else {
      updatedS--;
    }

    return setTime({ m: updatedM, s: updatedS });
  };

  var handleChange = (e) => {
    setGetTime(e.target.value);
  };
  const resume = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };

  return (
    <div>
      <h1>Timer</h1>
      <input type="number" onChange={handleChange} placeholder="MM:SS" />
      {status == 0 ? <button onClick={start}>Start</button> : ""}
      {status == 1 ? <button onClick={stop}>Stop</button> : ""}
      {status == 2 ? <button onClick={resume}>Resume</button> : ""}
      <button onClick={reset}>Reset</button>
      <h1>
        {time.m} Minute {time.s} Second
      </h1>
    </div>
  );
};

export default Timer;
