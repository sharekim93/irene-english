"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import logoImage from "@/images/logo.png";

interface LandingPageProps {
  onNavigateToHome: () => void;
}

const LandingPage = ({ onNavigateToHome }: LandingPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src={logoImage}
            alt="로고"
            width={240}
            height={64}
            className="object-contain"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Button
            size="lg"
            className="w-full bg-pink-500 text-white hover:bg-pink-600 font-semibold py-6"
            as="a"
            href="https://blog.naver.com/da_num"
            target="_blank"
            rel="noopener noreferrer"
          >
            블로그로 이동
          </Button>
          <Button
            size="lg"
            className="w-full bg-pink-500 text-white hover:bg-pink-600 font-semibold py-6"
            onClick={onNavigateToHome}
          >
            홈페이지로 이동
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
