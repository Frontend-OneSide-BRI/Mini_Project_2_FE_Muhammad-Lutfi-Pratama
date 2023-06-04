import React, { useState } from "react";
import { categoryGallery } from "../services/constants/category";
import galleryImgData from "../services/constants/img-gallery";
import ImgCard from "./img-card";

function GalleryCategory({ searchInputValue }) {
  let [activeCategory, setActiveCategory] = useState(0);

  const activeTabStyle = category => {
    let bgCategory = "";
    let textCategory = "";
    if (activeCategory === category) {
      bgCategory = "bg-yellow-800 font-semibold";
      textCategory = "text-white";
    } else {
      bgCategory = "text-[14px] hover:bg-yellow-800/10 ";
      textCategory = "text-black";
    }

    return {
      bgCategory,
      textCategory,
    };
  };

  const renderCategoryTabs = categoryData => {
    return categoryData.map((category, index) => {
      console.log("🚀 ~ category:", category);
      return (
        <button
          key={index}
          id="tab-1"
          tabindex="0"
          class={`transition-all ease-in-out duration-150 relative block h-10 px-6 tab rounded-full ${
            activeTabStyle(index).bgCategory
          }`}
          onClick={() => setActiveCategory(index)}
        >
          <span class={`${activeTabStyle(index).textCategory}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </button>
      );
    });
  };

  const renderCategoryContent = imgGallery => {
    if (searchInputValue !== "") {
      imgGallery = imgGallery.filter(img => {
        return img.title.toLowerCase().includes(searchInputValue.toLowerCase());
      });
    }

    if (categoryGallery[activeCategory] !== "all") {
      imgGallery = imgGallery.filter(
        img => img.category === categoryGallery[activeCategory]
      );
    }

    return imgGallery.map((img, index) => {
      return <ImgCard key={index} imgUrl={img.urlImg} title={img.title} />;
    });
  };

  let numberCategoryCols = `grid-cols-${categoryGallery.length}`;
  return (
    <div>
      {/* tab */}
      <div
        class={`relative w-100 max-w-6xl mt-8 mx-auto h-12 grid items-center ${numberCategoryCols} px-8 rounded-full bg-[#fef5eeee] overflow-hidden shadow-2xl shadow-900/20 transition`}
      >
        {renderCategoryTabs(categoryGallery)}
      </div>

      {/* tab content */}
      <div className="grid w-full max-w-5xl gap-2 p-5 mx-auto mt-4 mb-10 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-18 columns-3">
        {renderCategoryContent(galleryImgData)}
      </div>
    </div>
  );
}

export default GalleryCategory;
