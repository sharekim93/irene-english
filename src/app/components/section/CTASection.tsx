"use client";

import { motion } from "motion/react";
import { Button } from "@heroui/react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
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
            셀레나 영어와 함께 영어 실력을 완성하고 꿈을 이루어보세요. 전국
            각지의 학원에서 최고의 교육을 경험하실 수 있습니다.
          </p>
          <div className="space-x-4">
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
