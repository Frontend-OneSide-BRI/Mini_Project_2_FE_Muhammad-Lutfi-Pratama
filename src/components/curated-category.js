import React, { useState } from "react";
import { categoryCuratedData } from "../services/constants/category";
import { curatedImgData } from "../services/constants/img-curated";

function CuratedCategory({ inputValue }) {
  let [activeCategory, setActiveCategory] = useState(0);

  const renderCategoryTabs = categoryData => {
    return categoryData.map((category, index) => {
      let font = activeCategory === index ? "font-bold" : "opacity-70";
      let text = activeCategory === index ? "text-xl" : "text-lg";

      return (
        <p
          className={`w-full ${text} ${font} text-center text-gray-700 transition-all cursor-pointer hover:text-xl hover:font-bold hover:opacity-100`}
          onClick={() => setActiveCategory(index)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </p>
      );
    });
  };

  const renderCuratedImg = imgData => {
    return imgData.map((img, index) => {
      if (img.category !== categoryCuratedData[activeCategory]) return null;

      return (
        <div
          key={index}
          className="cursor-pointer relative w-full h-[300px] overflow-hidden transition-all rounded-lg md:h-[400px] lg:h-[500px] hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          <img
            src={img.urlImg}
            alt={img.title}
            className="object-cover w-full h-full"
          />
          <p className="absolute text-lg font-semibold text-white left-4 bottom-4">
            {img.title}
          </p>
        </div>
      );
    });
  };

  const isInputEmpty = () => {
    if (inputValue === "" || inputValue === undefined) return true;
    return false;
  };

  const filterImgData = imgData => {
    if (isInputEmpty()) return imgData;

    let filteredImgData = [];
    imgData.forEach(img => {
      if (img.title.toLowerCase().includes(inputValue.toLowerCase())) {
        filteredImgData.push(img);
      }
    });
    return filteredImgData;
  };

  return (
    <div className="pt-8">
      <h2 className="text-3xl font-light text-center">Curated For You</h2>
      <div class="w-3/12 sm:w-2/12 md:w-1/12 h-[3px] mt-2 mx-auto rounded-full bg-yellow-700"></div>
      {/* Tab menu */}
      <div className="container flex justify-between px-4 pt-8 m-auto">
        {renderCategoryTabs(categoryCuratedData)}
      </div>
      {/* Tab content */}
      <div className="grid grid-cols-1 gap-4 px-4 mx-auto mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderCuratedImg(filterImgData(curatedImgData))}
      </div>
    </div>
  );
}

export default CuratedCategory;
