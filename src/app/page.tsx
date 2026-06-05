import JsonLd from "./components/JsonLd";
import SiteFrame from "./components/layout/SiteFrame";
import BlogPreviewSection from "./components/section/BlogPreviewSection";
import CarouselSection from "./components/section/CarouselSection";
import CTASection from "./components/section/CTASection";
import FeaturesSection from "./components/section/FeatureSection";
import HeroSection from "./components/section/HeroSection";
import Location from "./components/section/Location";
import ProgramsSection from "./components/section/ProgramSection";
import { navigationJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const SelenaEnglishHomepage = async () => {
  return (
    <SiteFrame>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={navigationJsonLd()} />
      <HeroSection />
      <BlogPreviewSection />
      <ProgramsSection />
      <FeaturesSection />
      <CTASection />
      <Location />
    </SiteFrame>
  );
};

export default SelenaEnglishHomepage;
