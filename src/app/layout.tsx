import type { Metadata } from "next";

import CustomHeroUiProvider from "@/app/components/CustomHeroUiProvider";
import localFont from "next/font/local";
import "./globals.css";

const NanumQuareR = localFont({
  src: "../fonts/NanumSquareR.woff",
  display: "swap",
  variable: "--font-nanum-square",
});

const NanumQuareB = localFont({
  src: "../fonts/NanumSquareB.woff",
  display: "swap",
  variable: "--font-nanum-squre-bold",
});

export const metadata: Metadata = {
  title:
    "삼성영어 셀레나 아이린 석성 교습소 - 석성초, 동백역, 벽산블루밍, 대원칸타빌, 한라비발디, 아펠바움 셀레나 교실",
  description:
    "삼성영어 셀레나 아이린 석성 교습소입니다. 석성초 및 동백역 인근 삼성영어 셀레나 교실로, 벽산블루밍 아파트, 대원 칸타빌 아파트, 한라 비발디 아파트, 동백 아펠바움 아파트와 인접해있습니다.",
  keywords: [
    "삼성영어 셀레나 아이린 석성 교습소",
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
  openGraph: {
    siteName: "삼성영어 셀레나 아이린 석성 교습소",
    title: "삼성영어 셀레나 아이린 석성 교습소",
    description:
      "삼성영어 셀레나 아이린 석성 교습소입니다. 석성초, 동백역, 벽산블루밍, 대원칸타빌, 한라비발디, 아펠바움 셀레나 교실",
    images: [{ url: "../images/logo.png" }],
  },
  twitter: {
    title: "삼성영어 셀레나 아이린 석성 교습소",
    description:
      "삼성영어 셀레나 아이린 석성 교습소입니다. 석성초, 동백역, 벽산블루밍, 대원칸타빌, 한라비발디, 아펠바움 셀레나 교실",
    images: [{ url: "../images/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ko">
      <body className={`${NanumQuareR.variable} ${NanumQuareB.variable}`}>
        <CustomHeroUiProvider>{children}</CustomHeroUiProvider>
      </body>
    </html>
  );
}
