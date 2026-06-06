"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Container,
  Marker,
  NaverMap,
  NavermapsProvider,
} from "react-naver-maps";

import markerImage from "@/images/map_marker_selena.png";
import { siteConfig } from "@/config/site";

const StaticLocationCard = () => (
  <div className="relative min-h-[360px] bg-[linear-gradient(135deg,#fff,#f4fbff)] p-8">
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(236,72,153,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />
    <div className="relative flex h-full min-h-[300px] items-center justify-center">
      <div className="text-center">
        <Image
          src={markerImage}
          alt="석성초 영어학원 위치 마커"
          width={90}
          height={94}
          className="mx-auto"
        />
        <p className="mt-5 text-2xl font-black text-gray-950">
          {siteConfig.name}
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600">
          위도 {siteConfig.coordinates.latitude} · 경도{" "}
          {siteConfig.coordinates.longitude}
        </p>
      </div>
    </div>
  </div>
);

const NaverMapCard = ({ clientId }: { clientId: string }) => {
  const center = {
    lat: siteConfig.coordinates.latitude,
    lng: siteConfig.coordinates.longitude,
  };

  return (
    <div
      aria-label="삼성영어 아이린 석성 네이버 지도"
      className="relative min-h-[360px] bg-pink-50"
    >
      <NavermapsProvider ncpKeyId={clientId}>
        <Container
          className="h-full min-h-[360px] w-full"
          fallback={<StaticLocationCard />}
        >
          <NaverMap
            defaultCenter={center}
            defaultZoom={17}
            minZoom={12}
            scrollWheel={false}
            draggable
            zoomControl
          >
            <Marker
              position={center}
              title={siteConfig.name}
              icon={markerImage.src}
            />
          </NaverMap>
        </Container>
      </NavermapsProvider>
    </div>
  );
};

const Location = () => {
  const naverClientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;

  return (
    <section id="location" className="bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 text-center"
        >
          <p className="mb-3 text-sm font-nanum-square-bold font-bold text-pink-600">
            LOCATION
          </p>
          <h2 className="mb-4 text-3xl font-nanum-square-bold font-bold text-gray-900">
            오시는 길
          </h2>
          <p className="py-4 text-lg font-black leading-8 text-gray-700 sm:text-xl">
            {siteConfig.address}
          </p>
        </motion.div>

        <motion.div
          className="grid overflow-hidden rounded-2xl border border-pink-100 bg-[#fcf9f8] shadow-2xl shadow-pink-900/10 lg:grid-cols-[1fr_0.9fr]"
        >
          {naverClientId ? (
            <NaverMapCard clientId={naverClientId} />
          ) : (
            <StaticLocationCard />
          )}

          <div className="flex flex-col justify-center gap-5 bg-white p-8">
            <div>
              <p className="text-sm font-bold text-pink-600">ADDRESS</p>
              <h3 className="mt-2 text-2xl font-black leading-8 text-gray-950">
                어은목마을 벽산 블루밍 아파트 상가동 105호
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                석성초, 초당초, 동백역 생활권에서 방문하기 좋은 위치입니다.
                방문 전 전화로 주차 동선을 확인해 주세요.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.placeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-pink-600 px-5 text-sm font-bold text-white"
              >
                네이버 지도 열기
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
