"use client";

import Image from "next/image";
import React from "react";
import comingSoonImage from "@/images/home.png";

const ComingSoon = () => {
  return (
    <div className="flex justify-center bg-[#ff89bc]">
      <Image
        className="w-screen max-w-xl"
        src={comingSoonImage}
        width={1080}
        height={1080}
        alt="coming soon"
        onClick={() => {
          location.href = "tel:010-3421-4383";
        }}
      />
    </div>
  );
};

export default ComingSoon;
