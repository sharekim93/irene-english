import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ComingSoon from "./components/section/ComingSoon";
import CTASection from "./components/section/CTASection";
import FeaturesSection from "./components/section/FeatureSection";

const SelenaEnglishHomepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ComingSoon />
      <FeaturesSection />
      {/* <ProgramsSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default SelenaEnglishHomepage;
