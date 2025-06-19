"use client";

import { Button } from "@heroui/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "AI 원어민 셀레나 선생님과 함께!",
      subtitle: "초등부터 중등까지 완벽한 영어교육",
      description: "파닉스부터 수능 1등급까지 체계적인 커리큘럼",
      bgColor: "from-pink-400 to-purple-600",
    },
    {
      title: "1:1 맞춤형 영어 수업",
      subtitle: "개인별 수준에 따른 차별화된 교육",
      description: "매일매일 프리토킹으로 실력 향상 보장",
      bgColor: "from-blue-400 to-cyan-600",
    },
    {
      title: "혁신적인 교육 시스템",
      subtitle: "14년 연속 교육브랜드 대상 수상",
      description: "검증된 교육 방법으로 확실한 성과",
      bgColor: "from-emerald-400 to-teal-600",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].bgColor} flex items-center justify-center`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center text-white px-4 max-w-4xl">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>
            <motion.p
              className="text-lg md:text-xl mb-8 opacity-90"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {heroSlides[currentSlide].description}
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="space-x-4"
            >
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 font-semibold px-8 py-3"
              >
                프로그램 보기
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white hover:text-gray-800 font-semibold px-8 py-3"
              >
                학원 찾기
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
