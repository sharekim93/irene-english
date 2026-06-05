"use client";

import { motion } from "motion/react";
import FeatureCard from "../ui/FeatureCard";
import Image from "next/image";
import selenaStarIcon from "@/images/quick03.png";
import bookICon from "@/images/quick02.png";
import selenaIcon from "@/images/quick01.png";

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
      icon: <Image src={bookICon} alt="책 아이콘" width={75} height={75} />,
      title: "영어도서관 운영",
      description: "읽기 경험을 넓히고 어휘와 문장 감각을 함께 키웁니다",
    },
    {
      icon: (
        <Image src={selenaIcon} alt="셀레나 아이콘" width={75} height={75} />
      ),
      title: "1:1 맞춤 수업",
      description: "레벨 진단 후 아이에게 맞는 진도와 반복량으로 관리합니다",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-18"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
          />
        </svg>
      ),
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-nanum-square-bold font-bold text-pink-600">
            FEATURE
          </p>
          <h2 className="text-3xl font-nanum-square-bold font-black text-gray-900 mb-4 sm:text-4xl">
            삼성영어 셀레나 아이린 석성 교습소
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            분당 영어유치원 10년 경력의 아이린 원장님이 직접 지도하고, 읽기와
            쓰기까지 균형 있게 확장합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
