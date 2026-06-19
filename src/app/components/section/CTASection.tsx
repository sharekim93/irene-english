"use client";

import { motion } from "motion/react";
import { Button } from "@heroui/react";
import KakaoConsultButton from "@/app/components/ui/KakaoConsultButton";
import NaverBookingIcon from "@/app/components/ui/NaverBookingIcon";
import { siteConfig } from "@/config/site";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#b20b67_0%,#e94391_58%,#f973b4_100%)] px-5 py-24"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 z-0 h-64 w-64 rounded-full bg-white/18 blur-3xl sm:-right-10"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-28 z-0 h-80 w-80 rounded-full bg-[#ffb0cb]/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
        >
          <h2 className="mb-6 break-keep text-[1.75rem] font-bold leading-tight text-white sm:text-4xl">
            매일 달라지는 아이의 영어실력을 확인해보세요!
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white sm:text-xl">
            {siteConfig.phone}
          </p>
          <div className="consult-cta-group">
            <Button
              as="a"
              href={siteConfig.telHref}
              size="lg"
              className="consult-cta-button bg-white px-8 text-base font-nanum-square-bold font-bold text-pink-600 shadow-lg shadow-pink-950/15 hover:bg-gray-100"
            >
              전화 상담하기
            </Button>
            <KakaoConsultButton className="consult-cta-button" tone="dark" />
            <Button
              as="a"
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="consult-cta-button border border-white/70 bg-white px-8 text-base font-nanum-square-bold font-bold text-[#03c75a] shadow-lg shadow-pink-950/15 transition-colors hover:border-white hover:bg-[#f4fff9]"
            >
              <NaverBookingIcon className="h-7 w-7" />
              네이버 예약
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
