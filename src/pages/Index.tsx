
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DonateSection } from "@/components/DonateSection";
import { Newsletter } from "@/components/Newsletter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Navigation />
      <Hero />
      <Features />
      <DonateSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
