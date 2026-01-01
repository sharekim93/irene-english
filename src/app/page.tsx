"use client";

import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CarouselSection from "./components/section/CarouselSection";
import CTASection from "./components/section/CTASection";
import FeaturesSection from "./components/section/FeatureSection";
import Location from "./components/section/Location";
import LandingPage from "./components/section/LandingPage";

const SelenaEnglishHomepage = () => {
  const [showHomepage, setShowHomepage] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "삼성영어 셀레나 아이린 석성 교습소",
    url: "https://www.irene-english.com",
  };

  if (!showHomepage) {
    return <LandingPage onNavigateToHome={() => setShowHomepage(true)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* ... */}
      <Header />
      <CarouselSection />
      <FeaturesSection />
      {/* <ProgramsSection /> */}
      <CTASection />
      <Location />
      <Footer />
    </div>
  );
};

export default SelenaEnglishHomepage;
