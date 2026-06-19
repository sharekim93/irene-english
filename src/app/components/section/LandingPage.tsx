"use client";

import React from "react";
import Image from "next/image";
import styles from "./LandingPage.module.css";
import logoImage from "@/images/logo.webp";

interface LandingPageProps {
  onNavigateToHome: () => void;
}

const BLOG_URL = "https://blog.naver.com/da_num";

const LandingPage = ({ onNavigateToHome }: LandingPageProps) => {
  return (
    <div className={styles.landingPageRoot}>
      {/* 라디얼 글로우 배경 */}
      <div className={styles.bgRadialGlow} />

      <main className="w-full max-w-md relative z-10 flex flex-col items-center">
        <div
          className={`${styles.glassCard} p-10 rounded-2xl shadow-lg shadow-pink-900/10 text-center w-full transform transition-shadow duration-300 hover:shadow-pink-200/40`}
        >
          {/* 프로필 영역 */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-xl transition-opacity flex items-center justify-center " />
                <Image
                  src={logoImage}
                  alt="삼성영어 셀레나 로고"
                  width={480}
                  height={128}
                  style={{ objectFit: "cover" }}
                />
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="flex flex-col space-y-2">
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.glowPulse} group flex items-center justify-center gap-3 w-full py-4 bg-pink-500 text-white font-bold rounded-xl shadow-md shadow-pink-500/25 hover:shadow-pink-500/35 hover:-translate-y-0.5 transition-[background-color,box-shadow,transform] duration-300`}
            >
              <span className="text-lg">블로그로 이동</span>
            </a>
            <button
              type="button"
              onClick={onNavigateToHome}
              className="group flex items-center justify-center gap-3 w-full py-4 bg-white text-zinc-700 font-bold rounded-xl border-2 border-pink-100 hover:border-pink-500 hover:bg-pink-50 transition-colors duration-300"
            >
              <span className="text-lg">홈페이지로 이동</span>
            </button>
          </div>
          {/* 카운트다운 안내 제거 */}
        </div>

        {/* 인증 문구 */}
        <div className="mt-8 flex justify-center space-x-2 text-zinc-400 text-xs tracking-widest font-medium uppercase">
          <span>Copyright 2026 Irene. All rights reserved.</span>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
