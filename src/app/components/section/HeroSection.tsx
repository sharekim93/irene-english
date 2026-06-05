"use client";

import { Button } from "@heroui/react";
import { motion } from "motion/react";
import Image from "next/image";
import selenaCharacter from "@/images/selena_character.webp";
import { siteConfig } from "@/config/site";

const stats = [
  { value: "1:1", label: "개별 맞춤 수업" },
  { value: "주 5회", label: "매일 영어 루틴" },
  { value: "AI 셀레나", label: "말하기 피드백" },
  { value: "13:00-18:00", label: "수업 시간" },
  { value: "석성초", label: "초당초·동백역 생활권" },
];

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff,#fcf9f8_48%,#fff2f8)] px-5 pt-8 pb-10 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <motion.h1
            className="max-w-3xl text-4xl font-black leading-tight text-gray-950 sm:text-5xl lg:text-[3.4rem] mt-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65, ease: "easeOut" }}
          >
            삼성영어 아이린 석성
            <span className="block">
              영어유치원 10년, 관리자 경력의 선생님이
            </span>
            <span className="block text-pink-600">매일 말하고 확인하는</span>
            1:1 관리형 영어
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.65, ease: "easeOut" }}
          >
            삼성영어 아이린 석성은 AI 셀레나 선생님과 원장 직강 코칭을 연결해
            아이의 현재 수준에 맞는 매일 영어 습관을 만듭니다.
          </motion.p>

          <motion.div
            className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.65, ease: "easeOut" }}
          >
            <Button
              as="a"
              href={siteConfig.telHref}
              size="lg"
              className="h-14 bg-pink-600 px-8 text-base font-nanum-square-bold font-bold text-white shadow-lg shadow-pink-500/25"
            >
              레벨 진단 상담
            </Button>
            <Button
              as="a"
              href="/blog"
              size="lg"
              variant="bordered"
              className="h-14 border-pink-200 bg-white/80 px-8 text-base font-nanum-square-bold font-bold text-gray-800 backdrop-blur"
            >
              블로그 보기
            </Button>
            <Button
              as="a"
              href="/contact"
              size="lg"
              variant="light"
              className="h-14 px-8 text-base font-nanum-square-bold font-bold text-pink-700"
            >
              오시는 길
            </Button>
          </motion.div>

          <motion.div
            className="mt-7 grid w-full max-w-3xl grid-cols-2 overflow-hidden rounded-3xl border border-white/70 bg-white/65 shadow-xl shadow-pink-900/5 backdrop-blur sm:grid-cols-5"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.65, ease: "easeOut" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 border-r border-pink-100 px-3 py-4 text-center last:border-r-0 sm:px-5"
              >
                <p className="text-xl font-black text-pink-600 sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 break-keep text-xs font-bold text-gray-600 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[430px]"
          initial={{ opacity: 0, x: 44, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative rounded-[2rem] border border-white/80 bg-white/55 p-5 shadow-2xl shadow-pink-900/10 backdrop-blur-xl"
            whileHover={{ y: -8, rotate: -1 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <Image
              src={selenaCharacter}
              alt="AI 셀레나 선생님 캐릭터"
              width={720}
              height={720}
              priority
              className="mx-auto h-auto w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
