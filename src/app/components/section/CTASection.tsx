"use client";

import { motion } from "motion/react";
import KakaoConsultButton from "@/app/components/ui/KakaoConsultButton";
import NaverBookingButton from "@/app/components/ui/NaverBookingButton";
import { siteConfig } from "@/config/site";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-brand px-5 py-24 sm:bg-[linear-gradient(135deg,var(--brand-deep)_0%,var(--brand)_58%,#f973b4_100%)]"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 z-0 hidden h-64 w-64 rounded-full bg-white/18 blur-3xl sm:-right-10 sm:block"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-28 z-0 hidden h-80 w-80 rounded-full bg-brand-soft/20 blur-3xl sm:block"
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
            <a
              href={siteConfig.telHref}
              className="consult-cta-button inline-flex h-12 min-w-24 items-center justify-center rounded-xl bg-white px-8 text-base font-bold text-pink-600 shadow-lg shadow-pink-950/15 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/35"
            >
              전화 상담하기
            </a>
            <KakaoConsultButton className="consult-cta-button" tone="dark" />
            <NaverBookingButton className="consult-cta-button border-white/70 px-8 text-base shadow-md shadow-pink-950/10 hover:border-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
