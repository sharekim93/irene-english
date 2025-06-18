import type { Metadata } from "next";
import localFont from "next/font/local";
import CustomHeroUiProvider from "@/app/components/CustomHeroUiProvider";
import "./globals.css";

const jalnan = localFont({
  src: "../fonts/Jalnan2TTF.woff",
  display: "swap",
});

export const metadata: Metadata = {
  title: "석성초 삼성영어 셀레나 아이린 교실",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${jalnan.className}`}>
        <CustomHeroUiProvider>{children}</CustomHeroUiProvider>
      </body>
    </html>
  );
}
