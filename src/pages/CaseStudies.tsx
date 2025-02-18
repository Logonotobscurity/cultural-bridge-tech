
import { Navigation } from "@/components/Navigation";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";

const CaseStudies = () => {
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
              Case Studies
            </h1>
            <p className="text-lg text-ct-secondary max-w-2xl mx-auto">
              Explore real-world examples of Cultural Technology in action.
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
                <Brain className="w-6 h-6 text-ct-primary" />
              </div>
              <h3 className="text-xl font-bold text-ct-dark mb-4">
                Yoruba-Inspired Neural Networks
              </h3>
              <p className="text-ct-secondary">
                How traditional knowledge systems enhanced our AI model's performance.
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

export default CaseStudies;
