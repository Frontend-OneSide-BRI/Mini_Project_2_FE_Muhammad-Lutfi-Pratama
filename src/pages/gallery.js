import React, { useState } from "react";
import Navbar from "../components/navbar";
import GalleryCategory from "../components/gallery-category";
import GalleryLeading from "../components/gallery-leading";
import Footer from "../components/footer";

function Gallery() {
  let [galleryLeadingInputValue, setGalleryLeadingInputValue] = useState("");

  return (
    <div>
      <Navbar activeMenu="gallery" />
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
