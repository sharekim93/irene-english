"use client";
import { motion } from "motion/react";
import ProgramCard from "../ui/ProgramCard";
import { programSummaries } from "@/config/site";

// Programs Section Component
const ProgramsSection = () => {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8"
    >
      <div
        aria-hidden
        className="absolute right-0 top-16 h-72 w-72 translate-x-1/3 rounded-full bg-pink-100 blur-3xl"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
        >
          <p className="mb-3 text-sm font-nanum-square-bold font-bold text-pink-600">
            PROGRAM
          </p>
          <h2 className="text-3xl font-black text-gray-900 mb-4 sm:text-4xl">
            우리 아이 단계에 맞는 커리큘럼
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            첫 영어부터 중등 심화까지, 레벨 진단 후 필요한 단계부터
            시작합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programSummaries.map((program) => (
            <ProgramCard key={program.href} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
