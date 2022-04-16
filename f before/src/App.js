import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import City from "./Components/City/City";
import Country from "./Components/Country/Country";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-city" element={<City />} />
        <Route path="/add-country" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
