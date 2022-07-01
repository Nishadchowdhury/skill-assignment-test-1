import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Calander from "./Components/Home/Calander";
import Home from "./Components/Home/Home";
import Task from "./Components/Home/Task";
import Tasks from "./Components/Home/Tasks";
import TopNav from "./Components/Nabvar/TopNav";

function App() {
  return (
    <>
      <TopNav />



      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/todo' element={<Tasks />} />

        <Route path='/calender' element={<Calander />} />
      </Routes>

    </>
  );
}

export default App;
