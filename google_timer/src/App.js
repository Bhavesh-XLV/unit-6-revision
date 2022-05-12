import { useState } from "react";
import "./App.css";
import Button from "./Components/button";
import Stopwatch from "./Components/stopwatch";
import Timer from "./Components/Timer";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const [seeTimer, setSeeTimer] = useState(1);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  const reset = () => {
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    clearInterval(interv);
  };
  const resume = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  let Ms = time.ms,
    S = time.s,
    M = time.m,
    H = time.h;

  const run = () => {
    if (M == 60) {
      H++;
      M = 0;
    }
    if (S == 60) {
      M++;
      S = 0;
    }
    if (Ms == 100) {
      S++;
      Ms = 0;
    }
    Ms++;
    return setTime({ ms: Ms, s: S, m: M, h: H });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  return (
    <div className="App">
      <span
        onClick={() => {
          setSeeTimer(0);
        }}
      >
        StopWatch
      </span>
      <span
        onClick={() => {
          setSeeTimer(1);
        }}
      >
        Timer
      </span>

      {seeTimer === 0 ? (
        <div>
          <h1>StopWatch</h1>
          <Stopwatch time={time} />
          <Button
            start={start}
            status={status}
            stop={stop}
            reset={reset}
            resume={resume}
          />
        </div>
      ) : (
        <Timer />
      )}
    </div>
  );
}

export default App;
