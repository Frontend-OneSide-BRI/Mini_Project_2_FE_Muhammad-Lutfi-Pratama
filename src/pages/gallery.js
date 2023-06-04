import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import GalleryCategory from "../components/tabs-category/gallery-category";
import GalleryLeading from "../components/leading/gallery-leading";
import Footer from "../components/footer/footer";

function Gallery() {
  let [galleryLeadingInputValue, setGalleryLeadingInputValue] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar activeMenu="gallery" />
      </div>
      <div>
        <GalleryLeading
          inputValListener={val => setGalleryLeadingInputValue(val)}
        />
        <GalleryCategory searchInputValue={galleryLeadingInputValue} />
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
