
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ct-light/50 to-white -z-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <span className="px-4 py-1 bg-ct-primary/5 text-ct-primary rounded-full text-sm font-medium mb-6 inline-block border border-ct-primary/10">
          Bridging Tradition & Technology
        </span>
        <h1 className="text-4xl md:text-7xl font-bold text-ct-dark mb-6 leading-tight tracking-tight">
          Cultural
          <br />
          Intelligence
        </h1>
        <p className="text-lg md:text-xl text-ct-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
          Exploring the synergy between traditional knowledge and modern technology
          to create more ethical and culturally-aware AI systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#learn-more"
            className="px-8 py-3 bg-ct-primary text-white rounded text-sm font-medium hover:bg-ct-primary/90 transition-colors w-full sm:w-auto"
          >
            Learn More
          </a>
          <a
            href="#donate"
            className="px-8 py-3 border border-ct-primary/20 text-ct-primary rounded text-sm font-medium hover:bg-ct-primary/5 transition-colors w-full sm:w-auto"
          >
            Support Our Mission
          </a>
        </div>
      </motion.div>
    </section>
  );
};
