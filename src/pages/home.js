import React, { useState } from "react";
import Navbar from "../components/navbar";
import HomeLeading from "../components/home-leading";
import Carousel from "../components/carousel";
import CuratedCategory from "../components/curated-category";
import Footer from "../components/footer";
import AuthButton from "../components/auth-button";

function Home() {
  let [homeLeadingInputValue, setHomeLeadingInputValue] = useState("");

  const isShowCarousel = () => {
    if (homeLeadingInputValue === "") return true;
    return false;
  };

  return (
    <div>
      <Navbar activeMenu="home" />
      {/* <AuthModal /> */}
      <HomeLeading inputValListener={val => setHomeLeadingInputValue(val)} />
      <Carousel isShow={isShowCarousel()} />
      <CuratedCategory inputValue={homeLeadingInputValue} />
      <Footer />
    </div>
  );
}

export default Home;
