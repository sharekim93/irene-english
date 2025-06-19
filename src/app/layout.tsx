import type { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

import CustomHeroUiProvider from "@/app/components/CustomHeroUiProvider";
import localFont from "next/font/local";
import "./globals.css";

const Jalnan = localFont({
  src: "../fonts/Jalnan2TTF.woff",
  display: "swap",
  variable: "--font-jalnan",
});

const JalnanGothic = localFont({
  src: "../fonts/JalnanGothicTTF.woff",
  display: "swap",
  variable: "--font-jalnan-gothic",
});

export const metadata: Metadata = {
  title:
    "삼성영어 셀레나 아이린 교실 - 동백역, 석성초, 벽산블루밍, 대원칸타빌, 한라비발디, 아펠바움 셀레나 교실",
  description:
    "석성초 삼성영어 셀레나 아이린 교실입니다. 석성초 및 동백역 인근 삼성영어 셀레나 교실로, 벽산블루밍 아파트, 대원 칸타빌 아파트, 한라 비발디 아파트, 동백 아펠바움 아파트와 인접해있습니다.",
  keywords: [
    "석성초 셀레나",
    "석성초 영어학원",
    "석성초 영어",
    "석성초 셀레나 영어학원",
    "아이린 교실",
    "석성초 셀레나 교습소",
    "동백역 셀레나",
  ],
  robots: {
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const openGraph: OpenGraph = {
  title: "삼성영어 셀레나 아이린 교실",
  description:
    "석성초등학교 삼성영어 셀레나 아이린 교실입니다. 동백역, 석성초, 벽산블루밍, 대원칸타빌, 한라비발디, 아펠바움 셀레나 교실",
  images: [{ url: "@/images/selena_character.webp" }],
};

export const twitter: Twitter = {
  title: "삼성영어 셀레나 아이린 교실",
  description:
    "석성초등학교 삼성영어 셀레나 아이린 교실입니다. 동백역, 석성초, 벽산블루밍, 대원칸타빌, 한라비발디, 아펠바움 셀레나 교실",
  images: [{ url: "@/images/selena_character.webp" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ko">
      <body className={`${Jalnan.variable} ${JalnanGothic.variable}`}>
        <CustomHeroUiProvider>{children}</CustomHeroUiProvider>
      </body>
    </html>
  );
}
