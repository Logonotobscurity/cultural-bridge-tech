
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DonateSection } from "@/components/DonateSection";
import { Newsletter } from "@/components/Newsletter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white pt-16 relative">
      {/* Yoruba-inspired SVG pattern background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '60px 60px'
           }}
      />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Features />
        <DonateSection />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
