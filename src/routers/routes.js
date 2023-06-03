import Home from "../pages/home.js";
import "../App.css";
import { Route, Routes } from "react-router-dom";
import Gallery from "../pages/gallery.js";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default AppRoutes;
