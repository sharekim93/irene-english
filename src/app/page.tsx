import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CTASection from "./components/section/CTASection";
import FeaturesSection from "./components/section/FeatureSection";
import HeroSection from "./components/section/HeroSection";
import ProgramsSection from "./components/section/ProgramSection";

const SelenaEnglishHomepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProgramsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default SelenaEnglishHomepage;
