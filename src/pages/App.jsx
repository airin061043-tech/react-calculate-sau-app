import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home.jsx";
import Bmi from "./bmi.jsx";
import Bmr from "./BMR.jsx";
import Car from "./Car.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/bmr" element={<Bmr />} />
          <Route path="/car" element={<Car />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
