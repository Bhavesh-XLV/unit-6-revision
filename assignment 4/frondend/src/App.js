import logo from "./logo.svg";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
