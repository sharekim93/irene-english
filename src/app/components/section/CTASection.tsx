"use client";

import { motion } from "motion/react";
import { Button } from "@heroui/react";

const CTASection = () => {
  return (
    <section className="py-20 bg-pink-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            지금 시작하세요!
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            삼성영어 셀레나와 함께 매일 어학연수 떠나보세요
          </p>
          <div className="hidden space-x-4">
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-3"
            >
              지점 찾기
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="border-white text-white hover:bg-white hover:text-pink-600 font-semibold px-8 py-3"
            >
              프로그램 상세보기
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
