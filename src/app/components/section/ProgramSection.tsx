"use client";
import { motion } from "motion/react";
import ProgramCard from "../ui/ProgramCard";
import { programSummaries } from "@/config/site";

// Programs Section Component
const ProgramsSection = () => {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-surface-cream px-5 py-24 sm:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(233,67,145,0.14)_1px,transparent_1px),linear-gradient(0deg,rgba(14,165,233,0.09)_1px,transparent_1px)] bg-[size:120px_100%,100%_34px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[max(1.5rem,calc((100%_-_80rem)/2_+_2rem))] top-0 h-full w-px bg-pink-200/70"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
        >
          <p className="mb-3 text-sm font-bold text-pink-600">
            PROGRAM
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 sm:text-4xl">
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
