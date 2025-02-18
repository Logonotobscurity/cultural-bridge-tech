
import { Navigation } from "@/components/Navigation";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const Applications = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Navigation />
      
      <section className="py-20 px-4 bg-ct-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-ct-dark mb-6">
              Real-World Applications
            </h1>
            <p className="text-lg text-ct-secondary max-w-2xl mx-auto">
              Discover how Cultural Technology is being applied in various fields and industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-ct-primary/10"
            >
              <div className="w-12 h-12 bg-ct-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-ct-primary" />
              </div>
              <h3 className="text-xl font-bold text-ct-dark mb-4">
                Global AI Solutions
              </h3>
              <p className="text-ct-secondary">
                Explore how our culturally-aware AI systems are making a difference across different cultures and contexts.
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

export default Applications;
