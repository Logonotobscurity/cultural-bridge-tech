
import { Navigation } from "@/components/Navigation";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Blog = () => {
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
              Latest Insights
            </h1>
            <p className="text-lg text-ct-secondary max-w-2xl mx-auto">
              Explore our latest thoughts and insights on cultural technology and ethical AI development.
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
              <span className="text-sm text-ct-primary mb-4 block">March 15, 2024</span>
              <h3 className="text-xl font-bold text-ct-dark mb-4">
                The Future of Ethical AI Development
              </h3>
              <p className="text-ct-secondary">
                Exploring the intersection of cultural wisdom and modern technology in AI development.
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

export default Blog;
