import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import HomeLeading from "../components/leading/home-leading";
import Carousel from "../components/carousel/carousel";
import CuratedCategory from "../components/tabs-category/curated-category";
import Footer from "../components/footer/footer";

function Home() {
  let [homeLeadingInputValue, setHomeLeadingInputValue] = useState("");

  const isShowCarousel = () => {
    if (homeLeadingInputValue === "") return true;
    return false;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar activeMenu="home" />
      </div>
      {/* <AuthModal /> */}
      <HomeLeading inputValListener={val => setHomeLeadingInputValue(val)} />
      <Carousel isShow={isShowCarousel()} />
      <CuratedCategory inputValue={homeLeadingInputValue} />
      <Footer />
    </div>
  );
}

export default Home;
