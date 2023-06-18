import "./App.css";
import NavPills from "./component/navbar/Navbar";
import ModalForm from "./component/newHabitForm/ModalForm";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Archives from "./pages/Archive";
import HabitCard from "./component/HabitCard/HabitCard";

function App() {
  return (
    <div className="App">
      <NavPills />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archives" element={<Archives />} />
      </Routes>
    </div>
  );
}

export default App;
