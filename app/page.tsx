import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import InspirationSection from "@/components/InspirationSection";
import BeautySection from "@/components/BeautySection";
import FeaturesBarSection from "@/components/FeatureBarSection";
import BrowseRangeSection from "@/components/BrowseRangeSection";
import HowItWorkSection from "@/components/HowItWorkSection";
import OurProducts from "@/components/OurProducts";
import TestimonialsSection from "@/components/TestomnialSections";
import LastIntroSection from "@/components/LastIntroBanner";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <FeaturesBarSection/>
      <InspirationSection />
      <BeautySection />
      <BrowseRangeSection />
      <HowItWorkSection />
      <OurProducts />
      <TestimonialsSection/>
      <LastIntroSection/>
      <Footer/>
    </div>
  );
}
