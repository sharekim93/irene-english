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
import { useRef } from "react";

const MyMap = () => {
  const naverMaps = useNavermaps();
  const imgUrl = new URL("@/images/map_marker_selena.png", import.meta.url)
    .href;
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const infoWindowRef = useRef<typeof InfoWindow>(null);

  return (
    <NaverMap
      ref={mapRef}
      defaultCenter={naverMaps.LatLng(37.2674246, 127.154662)}
      defaultZoom={18}
      zoomControl
      zoomControlOptions={{
        style: naverMaps.ZoomControlStyle.SMALL,
        position: naverMaps.Position.TOP_RIGHT,
      }}
    >
      <InfoWindow
        position={naverMaps.LatLng(37.2674246, 127.154662)}
        content={`<div style=padding:20px;border-radius:10px;>
        <h3>아이린 석성교습소</h3>
        <p>010-4521-4383</p>
        경기도 용인시 기흥구 동백2로 9 상가동 105호
        </div>`}
        ref={infoWindowRef}
      />
      <Marker
        ref={markerRef}
        position={naverMaps.LatLng(37.2674246, 127.154662)}
        title="삼성영어 셀레나 아이린 석성 교습소"
        icon={{
          url: imgUrl,
          size: naverMaps.Size(50, 52),
          origin: naverMaps.Point(0, 0),
          anchor: naverMaps.Point(6, 60),
        }}
        animation={1}
        onClick={() => {
          // @ts-expect-error getMap 이 react-naver-maps 에 저장되어 있지 않음
          if (infoWindowRef.current?.getMap()) {
            // @ts-expect-error close() 가 react-naver-maps 에 저장되어 있지 않음
            infoWindowRef.current.close();
            return;
          }
          // @ts-expect-error open() 가 react-naver-maps 에 저장되어 있지 않음
          infoWindowRef.current?.open(mapRef.current, markerRef?.current);
        }}
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
          <p className="py-4 text-xl font-black">
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
