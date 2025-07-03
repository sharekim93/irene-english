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
    "삼성영어 셀레나 아이린 석성 교습소 - 석성초 영어학원, 동백역 영어학원, 어은목마을 영어학원",
  description:
    "삼성영어 셀레나 아이린 석성 교습소입니다. 석성초 영어학원, 동백역 영어학원, 어은목마을 영어학원",
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
      "삼성영어 셀레나 아이린 석성 교습소입니다. 석성초 영어학원, 동백역 영어학원, 어은목마을 영어학원 입니다.",
    images: [{ url: "/og-image.webp", width: 2835, height: 2835 }],
    url: "https://www.irene-english.com",
    type: "website",
  },
  twitter: {
    title: "삼성영어 셀레나 아이린 석성 교습소",
    description:
      "삼성영어 셀레나 아이린 석성 교습소입니다. 석성초 영어학원, 동백역 영어학원, 어은목마을 영어학원 입니다.",
    images: [{ url: "/og-image.webp", width: 2835, height: 2835 }],
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
