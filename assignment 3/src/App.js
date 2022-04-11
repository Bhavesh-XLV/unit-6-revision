import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import AllUsers from "./Components/AllUsers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration/one" element={<Form1 />} />
        <Route path="/registration/two" element={<Form2 />} />
        <Route path="/users" element={<AllUsers />} />
      </Routes>
    </div>
  );
}

export default App;
