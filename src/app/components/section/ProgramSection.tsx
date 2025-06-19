"use client";
import { motion } from "motion/react";
import ProgramCard from "../ui/ProgramCard";

// Programs Section Component
const ProgramsSection = () => {
  const programs = [
    {
      title: "파닉스 완성 프로그램",
      age: "초등 저학년",
      description: "체계적인 파닉스 학습으로 영어 읽기의 기초를 탄탄하게",
      features: ["기초 발음 완성", "읽기 능력 향상", "단어 인식력 강화"],
      color: "bg-pink-100 border-pink-300",
    },
    {
      title: "300만 문장 만들기",
      age: "초등 고학년",
      description: "다양한 문장 구조를 익혀 영어 표현력을 극대화",
      features: ["문법 패턴 학습", "문장 구조 이해", "표현력 향상"],
      color: "bg-blue-100 border-blue-300",
    },
    {
      title: "수능 1등급 완성",
      age: "중등부",
      description: "체계적인 수능 준비로 최고 등급 달성",
      features: ["수능 유형 분석", "실전 문제 풀이", "고득점 전략"],
      color: "bg-purple-100 border-purple-300",
    },
    {
      title: "AI 프리토킹",
      age: "전 연령",
      description: "AI 원어민과의 실시간 대화로 회화 실력 완성",
      features: ["실시간 대화", "발음 교정", "회화 자신감"],
      color: "bg-emerald-100 border-emerald-300",
    },
  ];

  return (
    <section id="programs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            체계적인 교육 프로그램
          </h2>
          <p className="text-xl text-gray-600">
            연령별 수준별 맞춤 커리큘럼으로 완벽한 영어 실력을 만들어갑니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
