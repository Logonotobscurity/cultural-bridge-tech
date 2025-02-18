
import { Navigation } from "@/components/Navigation";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const GeometricPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 opacity-[0.03]" 
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 50v-10h-4v10h-10v4h10v10h4v-10h10v-4h-10zM22 22v-6h-2v6h-6v2h6v6h2v-6h6v-2h-6zM4 4V0H2v4H0v2h4v4h2V6h4V4H4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px'
      }}
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M50 50h40v40H50V50zM10 10h40v40H10V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}
    />
  </div>
);

const Ethics = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Enhanced Geometric Patterns */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <GeometricPattern />
        
        <div className="relative z-10 px-4 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-20 h-1 bg-ct-primary/20 mx-auto mb-8"
            />
            
            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-bold text-ct-dark mb-6 tracking-tight">
              Ethics
            </h1>
            
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <span className="text-lg md:text-xl text-ct-primary/80 tracking-wider uppercase">
                Cultural Understanding in AI
              </span>
            </motion.div>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-ct-secondary max-w-2xl mx-auto leading-relaxed mb-12"
            >
              Exploring the intersection of traditional wisdom and artificial intelligence
              to create more ethical and culturally-aware systems.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="#learn-more"
                className="inline-block px-8 py-4 bg-ct-primary text-white rounded-lg 
                         text-lg font-medium hover:bg-ct-primary/90 transition-colors
                         border border-ct-primary/20"
              >
                Explore Our Principles
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative Bottom Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"
        />
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-ct-primary/10"
            >
              <div className="w-12 h-12 bg-ct-primary/5 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-ct-primary">01</span>
              </div>
              <h3 className="text-2xl font-bold text-ct-dark mb-4">
                Human-Centered AI
              </h3>
              <p className="text-ct-secondary leading-relaxed">
                Learn about our commitment to developing AI systems that prioritize human values and cultural sensitivities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Ethics;
