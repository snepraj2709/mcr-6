import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurent from "./pages/Restaurent";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurent />} />
      </Routes>
    </div>
  );
}
