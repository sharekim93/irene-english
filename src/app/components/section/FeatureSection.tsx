"use client";

import { motion } from "motion/react";
import FeatureCard from "../ui/FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI 원어민 선생님",
      description: "최첨단 AI 기술로 구현된 원어민과의 실시간 대화",
    },
    {
      icon: "📚",
      title: "체계적 커리큘럼",
      description: "파닉스부터 수능까지 단계별 맞춤 교육과정",
    },
    {
      icon: "👥",
      title: "1:1 맞춤 수업",
      description: "개인별 수준 분석을 통한 차별화된 교육",
    },
    {
      icon: "🏆",
      title: "검증된 교육법",
      description: "14년 연속 교육브랜드 대상 수상의 노하우",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            셀레나 영어만의 특별함
          </h2>
          <p className="text-xl text-gray-600">
            혁신적인 교육 방법으로 영어 실력을 완성합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
