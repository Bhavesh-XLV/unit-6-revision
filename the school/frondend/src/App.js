import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddTeacher from "./Components/AddTeacher/AddTeacher";
import ClassList from "./Components/ClassList/ClassList";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";
import ShowTable from "./Components/ShowTable/ShowTable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:_id" element={<ShowTable />} />
        <Route path="/high/:_id" element={<ShowTable />} />
        <Route path="/low/:_id" element={<ShowTable />} />
        <Route path="/male/:_id" element={<ShowTable />} />
        <Route path="/female/:_id" element={<ShowTable />} />
        <Route path="/addteacher/:_id" element={<AddTeacher />} />
        <Route path="/getClass/:_id" element={<ClassList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
