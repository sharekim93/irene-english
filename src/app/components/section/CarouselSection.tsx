"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import promotion1 from "@/images/promotion1.jpeg";
import promotion2 from "@/images/promotion2.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSection = () => {
  const settings = {
    className: "",
    dots: true,
    fade: true,
    speed: 2000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // adaptiveHeight: true,
  };
  return (
    <div className="slider-container bg-[#ff89bc] flex justify-center items-center py-8">
      <Slider {...settings} className="w-full">
        <div className="flex justify-center items-center">
          <Image
            className="max-w-xl mx-auto"
            src={promotion1}
            alt="promotion1"
            width={1920}
            height={1357}
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            className="max-w-xl mx-auto"
            src={promotion2}
            alt="promotion2"
            width={1920}
            height={1357}
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSection;
