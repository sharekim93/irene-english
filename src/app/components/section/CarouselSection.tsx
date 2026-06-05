"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "motion/react";

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
    <section className="overflow-hidden bg-[#ff89bc] px-5 py-16">
      <motion.div
        className="slider-container mx-auto flex max-w-5xl items-center justify-center"
        initial={{ opacity: 0, y: 54, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Slider {...settings} className="w-full">
          <div className="flex items-center justify-center">
            <Image
              className="mx-auto w-full max-w-xl rounded-3xl shadow-2xl shadow-pink-950/20"
              src={promotion1}
              alt="삼성영어 셀레나 아이린 석성 프로모션 안내"
              width={1920}
              height={1357}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="mx-auto w-full max-w-xl rounded-3xl shadow-2xl shadow-pink-950/20"
              src={promotion2}
              alt="삼성영어 셀레나 아이린 석성 수업 안내"
              width={1920}
              height={1357}
            />
          </div>
        </Slider>
      </motion.div>
    </section>
  );
};

export default CarouselSection;
