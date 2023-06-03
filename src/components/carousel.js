import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import imgTopData from "../services/constants/img-top";

function Carousel({ isShow }) {
  let [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? imgTopData.length - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === imgTopData.length - 1 ? 0 : currentSlide + 1
    );
  };

  const goToSlide = slideIndex => {
    setCurrentSlide(slideIndex);
  };

  const renderDots = imgData => {
    return imgData.map((_, slideIndex) => {
      let opacity =
        currentSlide === slideIndex ? "opacity-100 scale-125" : "opacity-30";

      return (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className={`text-2xl transition-all cursor-pointer ${opacity} hover:scale-125 hover:opacity-100`}
        >
          <RxDotFilled />
        </div>
      );
    });
  };

  return (
    <div className="mb-10">
      {!!isShow && (
        <div className="max-w-[1400px] h-[680px] w-full m-auto px-2 md:px-8 md:h-[480px] relative group">
          <div
            style={{
              backgroundImage: `url(${imgTopData[currentSlide].urlImg})`,
            }}
            className="w-full h-full duration-500 bg-center bg-cover rounded-2xl"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block hover:scale-110 transition-all absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-black/50 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute hover:scale-110  top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl hover:bg-black/50 rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex justify-center py-2 top-4">
            {renderDots(imgTopData)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
