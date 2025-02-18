
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DonateSection } from "@/components/DonateSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <DonateSection />
      <Footer />
    </div>
  );
};

export default Index;
