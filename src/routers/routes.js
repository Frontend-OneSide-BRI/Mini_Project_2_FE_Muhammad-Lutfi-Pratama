import Home from "../pages/home.js";
import "../App.css";
import { Route, Routes } from "react-router-dom";
import Gallery from "../pages/gallery.js";
import DetailPage from "../pages/detail.js";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default AppRoutes;
