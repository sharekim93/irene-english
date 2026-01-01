"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import logoImage from "@/images/logo.png";

interface LandingPageProps {
  onNavigateToHome: () => void;
}

const LandingPage = ({ onNavigateToHome }: LandingPageProps) => {
  const [countdown, setCountdown] = useState(3);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.open("https://blog.naver.com/da_num", "_blank");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 100 / 30; // 3초 = 30 * 100ms
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-pink-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

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

        {/* Countdown Notice */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-600 text-sm">
            {countdown > 0 ? (
              <>
                <span className="font-semibold text-pink-500">
                  {countdown}초
                </span>{" "}
                후 블로그로 자동으로 이동합니다
              </>
            ) : (
              <span className="text-pink-500">이동 중...</span>
            )}
          </p>
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
