"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

const IreneEnglishHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
      description: "매일매일 자기주도학습으로 실력 향상 보장",
      bgColor: "from-blue-400 to-cyan-600",
    },
    {
      title: "혁신적인 교육 시스템",
      subtitle: "14년 연속 교육브랜드 대상 수상",
      description: "검증된 교육 방법으로 확실한 성과",
      bgColor: "from-emerald-400 to-teal-600",
    },
  ];

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
      title: "수능 1등급 수준 완성",
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <motion.div
                className="text-xl font-bold text-pink-600"
                whileHover={{ scale: 1.05 }}
              >
                삼성영어 셀레나 아이린 교실
              </motion.div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#programs"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                프로그램
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                특징
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-pink-600 transition-colors hidden"
              >
                상담신청
              </a>
            </nav>
            <Button
              color="primary"
              variant="flat"
              onPress={() => {
                location.href = `tel:010-5333-4383`;
              }}
              className="bg-pink-100 text-pink-600 hover:bg-pink-200"
            >
              전화문의
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
                  onPress={onOpen}
                >
                  무료 체험하기
                </Button>
                <Button
                  size="lg"
                  variant="bordered"
                  className="border-white text-white hover:bg-white hover:text-gray-800 font-semibold px-8 py-3"
                >
                  프로그램 보기
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              삼성영어 셀레나 아이린 교실만의 특별함
            </h2>
            <p className="text-xl text-gray-600">
              혁신적인 교육 방법으로 영어 실력을 완성합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className={`${program.color} border-2 h-full`}>
                  <CardBody className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {program.title}
                      </h3>
                      <Chip size="sm" variant="flat" color="primary">
                        {program.age}
                      </Chip>
                    </div>
                    <p className="text-gray-700 mb-6 text-lg">
                      {program.description}
                    </p>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 hidden">
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
              셀레나 선생님과 함께 영어 실력을 완성하고 꿈을 이루어보세요.
            </p>
            <div className="space-x-4">
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-3"
                onPress={onOpen}
              >
                무료 상담 신청
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-white text-white hover:bg-white hover:text-pink-600 font-semibold px-8 py-3"
              >
                지점 찾기
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">셀레나 아이린 교실</h3>
              <p className="text-gray-400">
                혁신적인 AI 교육 시스템으로
                <br />
                영어 교육의 새로운 패러다임을 제시합니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">프로그램</h4>
              <ul className="space-y-2 text-gray-400">
                <li>파닉스 완성</li>
                <li>300만 문장 만들기</li>
                <li>수능 1등급 완성</li>
                <li>AI 프리토킹</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">고객지원</h4>
              <ul className="space-y-2 text-gray-400">
                <li>무료 상담</li>
                <li>체험 수업</li>
                <li>지점 안내</li>
                <li>학습 가이드</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  📞 <a href="tel:010-5333-4383">010-5333-4383</a>
                </li>
                <li>📧 darambook@kakao.com</li>
                <li>🕒 평일 12:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 김다영. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold text-pink-600">
                  무료 상담 신청
                </h3>
                <p className="text-gray-600">
                  아이린 영어 전문 상담사가 친절하게 안내해드립니다
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      학생 이름
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="학생 이름을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      학년
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
                      <option>학년을 선택해주세요</option>
                      <option>초등 1학년</option>
                      <option>초등 2학년</option>
                      <option>초등 3학년</option>
                      <option>초등 4학년</option>
                      <option>초등 5학년</option>
                      <option>초등 6학년</option>
                      <option>중등 1학년</option>
                      <option>중등 2학년</option>
                      <option>중등 3학년</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      학부모 연락처
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      관심 프로그램
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2 text-pink-600" />
                        파닉스 완성 프로그램
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2 text-pink-600" />
                        300만 문장 만들기
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2 text-pink-600" />
                        수능 1등급 완성
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2 text-pink-600" />
                        AI 프리토킹
                      </label>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  취소
                </Button>
                <Button
                  color="primary"
                  className="bg-pink-600 text-white"
                  onPress={onClose}
                >
                  상담 신청하기
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default IreneEnglishHomepage;
