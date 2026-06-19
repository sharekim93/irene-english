import type { Metadata } from "next";

import CustomHeroUiProvider from "@/app/components/CustomHeroUiProvider";
import { pageDescription, siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "삼성영어 셀레나 아이린 석성 | 석성초·초당초·동백역 영어학원",
    template: "%s | 삼성영어 셀레나 아이린 석성",
  },
  description: pageDescription,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    siteName: siteConfig.name,
    title: "삼성영어 셀레나 아이린 석성",
    description: pageDescription,
    images: [{ url: "/og-image.webp", width: 2835, height: 2835 }],
    url: siteConfig.domain,
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "삼성영어 셀레나 아이린 석성",
    description: pageDescription,
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
      <body className="font-pretendard">
        <CustomHeroUiProvider>{children}</CustomHeroUiProvider>
      </body>
    </html>
  );
}
