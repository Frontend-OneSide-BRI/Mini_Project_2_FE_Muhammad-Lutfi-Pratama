import React, { useState } from "react";
import Navbar from "../components/navbar";
import HomeLeading from "../components/home-leading";
import Carousel from "../components/carousel";
import CuratedCategory from "../components/curated-category";
import Gallery from "./gallery";
import GalleryLeading from "../components/gallery-leading";

function Home() {
  let [homeLeadingInputValue, setHomeLeadingInputValue] = useState("");
  let [galleryLeadingInputValue, setGalleryLeadingInputValue] = useState("");
  let [activeNavMenu, setActiveNavMenu] = useState("gallery"); //! change to "home" when done

  const isShowCarousel = () => {
    if (homeLeadingInputValue === "") return true;
    return false;
  };

  return (
    <div>
      <Navbar
        activeMenu={activeNavMenu}
        activeMenuListener={navMenu => setActiveNavMenu(navMenu)}
      />

      {activeNavMenu === "home" ? (
        <div>
          <HomeLeading
            inputValListener={val => setHomeLeadingInputValue(val)}
          />
          <Carousel isShow={isShowCarousel()} />
          <CuratedCategory inputValue={homeLeadingInputValue} />
        </div>
      ) : activeNavMenu === "gallery" ? (
        <div>
          <GalleryLeading
            inputValListener={val => setGalleryLeadingInputValue(val)}
          />
          <Gallery searchInputValue={galleryLeadingInputValue} />
        </div>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}

export default Home;
