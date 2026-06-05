"use client";

import { motion } from "motion/react";
import { Button } from "@heroui/react";
import { siteConfig } from "@/config/site";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-pink-500 px-5 py-24"
    >
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-3xl"
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
