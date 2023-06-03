import React from "react";
import Navbar from "../components/navbar";
import HomeLeading from "../components/homeLeading";
import Carousel from "../components/carousel";
import CuratedCategory from "../components/curated_category";

function Home() {
  return (
    <div>
      <Navbar />
      <HomeLeading />
      <Carousel />

      {/* Curated Category */}
      <CuratedCategory /> 
      
    </div>
  );
}

export default Home;
