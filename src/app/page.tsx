import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ComingSoon from "./components/section/ComingSoon";
import CTASection from "./components/section/CTASection";
import FeaturesSection from "./components/section/FeatureSection";
import Location from "./components/section/Location";

const SelenaEnglishHomepage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "삼성영어 셀레나 아이린 석성 교습소",
    url: "https://www.irene-english.com",
  };
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
      <ComingSoon />
      <FeaturesSection />
      {/* <ProgramsSection /> */}
      <CTASection />
      <Location />
      <Footer />
    </div>
  );
};

export default SelenaEnglishHomepage;
