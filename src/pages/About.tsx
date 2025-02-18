
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Brain, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-ct-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-ct-dark mb-6">
              Our Story
            </h1>
            <p className="text-lg text-ct-secondary max-w-2xl mx-auto">
              Discover how Cultural Technology is bridging the gap between
              traditional wisdom and modern AI development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-ct-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-ct-primary" />
              </div>
              <h3 className="text-xl font-bold text-ct-dark mb-4">Our Vision</h3>
              <p className="text-ct-secondary">
                Creating AI systems that respect and incorporate cultural wisdom
                while pushing the boundaries of technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-ct-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-ct-primary" />
              </div>
              <h3 className="text-xl font-bold text-ct-dark mb-4">Our Team</h3>
              <p className="text-ct-secondary">
                A diverse group of researchers, engineers, and cultural experts
                working together to shape the future of AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-ct-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-ct-primary" />
              </div>
              <h3 className="text-xl font-bold text-ct-dark mb-4">Our Impact</h3>
              <p className="text-ct-secondary">
                Making a global difference through ethical AI development and
                cultural preservation.
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

export default About;
