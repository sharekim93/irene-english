import type { Metadata } from "next";
import localFont from "next/font/local";
import CustomHeroUiProvider from "@/app/components/CustomHeroUiProvider";
import "./globals.css";

const jalnan = localFont({
  src: "../fonts/Jalnan2TTF.woff",
  display: "swap",
});

export const metadata: Metadata = {
  title: "삼성영어 셀레나 아이린 교실",
  description:
    "석성초 셀레나 영어학원 아이린 교실입니다. 동백옆 앞 셀레나 영어학원으로 석성초 셀레나 교습소입니다.",
  keywords: [
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
