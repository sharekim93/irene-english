"use client";

import { motion } from "motion/react";
import FeatureCard from "../ui/FeatureCard";
import Image from "next/image";
import selenaStarIcon from "@/images/quick03.png";

const featureIconClass = "h-11 w-11 text-[#b20b67]";

const LibraryIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 48 48"
    className={featureIconClass}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M9 13.5c4.9-2.1 9.9-2 15 0v25c-5.1-2-10.1-2-15 0v-25Z"
      strokeWidth="2"
    />
    <path
      d="M24 13.5c5.1-2 10.1-2.1 15 0v25c-4.9-2-9.9-2-15 0v-25Z"
      strokeWidth="2"
    />
    <path d="M16 20h3.5M16 26h3.5M30 20h3.5M30 26h3.5" strokeWidth="1.7" />
    <path d="M24 13.5V40" strokeWidth="1.6" />
  </svg>
);

const CustomLessonIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 48 48"
    className={featureIconClass}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18.5" cy="17.5" r="6.5" strokeWidth="2" />
    <path
      d="M7.5 36.5c1.7-6.6 5.7-10.2 11-10.2 3.5 0 6.4 1.6 8.4 4.6"
      strokeWidth="2"
    />
    <circle cx="34" cy="31" r="7.5" strokeWidth="2" />
    <path
      d="M34 27.5V31l2.4 2.1M31 39.5l-1.2 3M38.2 39.5l1.1 3"
      strokeWidth="1.8"
    />
  </svg>
);

const WritingIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 48 48"
    className={featureIconClass}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 8.5h18.5L38 16v23.5H12v-31Z" strokeWidth="2" />
    <path d="M30.5 8.5V16H38" strokeWidth="2" />
    <path d="M18 24h10M18 30h7" strokeWidth="1.8" className="text-[#8b7078]" />
    <path
      d="m26.5 36 9.8-9.8a3 3 0 0 1 4.2 4.2l-9.8 9.8-5.5 1.4 1.3-5.6Z"
      strokeWidth="2"
    />
    <path d="m34.6 27.9 4.2 4.2" strokeWidth="1.8" />
  </svg>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <Image
          src={selenaStarIcon}
          alt="셀레나 뿅 아이콘"
          width={75}
          height={75}
        />
      ),
      title: "AI 셀레나 선생님",
      description: `오늘 배운 표현을 바로 말하고\n발음과 말하기를 확인합니다`,
    },
    {
      icon: <LibraryIcon />,
      title: "영어도서관 운영",
      description: "읽기 경험을 넓히고 어휘와 문장 감각을 함께 키웁니다",
    },
    {
      icon: <CustomLessonIcon />,
      title: "1:1 맞춤 수업",
      description: "레벨 진단 후 아이에게 맞는 진도와 반복량으로 관리합니다",
    },
    {
      icon: <WritingIcon />,
      title: "Creative Writing Program",
      description: "생각을 영어 문장으로 정리하고 표현하는 힘을 기릅니다",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#fcf9f8] px-5 py-24 sm:px-8"
    >
      <motion.div
        aria-hidden
        className="absolute left-0 top-20 h-64 w-64 -translate-x-1/3 rounded-full bg-violet-100 blur-3xl"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16">
          <p className="mb-3 text-sm font-nanum-square-bold font-bold text-pink-600">
            FEATURE
          </p>
          <h2 className="text-3xl font-nanum-square-bold font-black text-gray-900 mb-4 sm:text-4xl">
            삼성영어 셀레나 아이린 석성
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-8 text-gray-600">
            분당 영어유치원 10년 경력의 아이린 원장님이 직접 지도하고 영어의 4대
            영역을 균형 있게 학습합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
