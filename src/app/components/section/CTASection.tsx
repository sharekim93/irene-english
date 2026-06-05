"use client";

import { motion } from "motion/react";
import { Button } from "@heroui/react";
import { siteConfig } from "@/config/site";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#b20b67_0%,#e94391_58%,#f973b4_100%)] px-5 py-24"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 h-64 w-64 rounded-full bg-white/18 blur-3xl sm:-right-10"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-28 h-80 w-80 rounded-full bg-[#ffb0cb]/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            레벨 진단 후 아이에게 맞는 학습과정을 안내해 드립니다
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            상담 가능 시간 {siteConfig.openingHoursText} · 전화 상담{" "}
            {siteConfig.phone}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              as="a"
              href={siteConfig.telHref}
              size="lg"
              className="h-14 bg-white px-8 font-nanum-square-bold font-bold text-pink-600 hover:bg-gray-100"
            >
              전화 상담하기
            </Button>
            <Button
              as="a"
              href="/contact"
              size="lg"
              variant="bordered"
              className="h-14 border-white px-8 font-nanum-square-bold font-bold text-white hover:bg-white hover:text-pink-600"
            >
              오시는 길 보기
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
