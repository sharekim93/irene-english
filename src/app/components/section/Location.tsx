"use client";

import {
  InfoWindow,
  Container as MapDiv,
  Marker,
  NaverMap,
  NavermapsProvider,
  useNavermaps,
} from "react-naver-maps";
import { motion } from "motion/react";

const MyMap = () => {
  const naverMaps = useNavermaps();

  return (
    <NaverMap
      defaultCenter={new naverMaps.LatLng(37.2674691, 127.1545936)}
      defaultZoom={17}
    >
      <Marker
        position={new naverMaps.LatLng(37.267441, 127.154654)}
        title="삼성영어 셀레나 아이린 석성 교습소"
        animation={1}
      />
      <InfoWindow
        position={new naverMaps.LatLng(37.267441, 127.154656)}
        content="삼성영어 셀레나 아이린 석성 교습소"
      />
    </NaverMap>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-nanum-square-bold font-bold text-gray-900 mb-4">
            오시는 길
          </h2>
          <p className="py-4">
            경기도 용인시 기흥구 동백2로 9 어은목마을 벽산 블루밍 아파트 상가동
            105호
          </p>
        </motion.div>
        <NavermapsProvider
          ncpKeyId={process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || ""}
        >
          <MapDiv
            style={{
              width: "100%",
              height: "600px",
            }}
          >
            <MyMap />
          </MapDiv>
        </NavermapsProvider>
      </div>
    </section>
  );
};

export default Location;
