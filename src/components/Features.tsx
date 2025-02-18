
import { motion } from "framer-motion";

const features = [
  {
    title: "AI Innovation",
    description:
      "Developing cutting-edge AI systems inspired by traditional wisdom and cultural knowledge.",
  },
  {
    title: "Ethical Framework",
    description:
      "Creating responsible AI with built-in ethical considerations and cultural awareness.",
  },
  {
    title: "Global Impact",
    description:
      "Bridging diverse cultural perspectives to shape the future of technology.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ct-dark mb-4 tracking-tight">
            Our Approach
          </h2>
          <p className="text-ct-secondary max-w-2xl mx-auto">
            We combine traditional knowledge with modern technology to create more
            ethical and effective AI systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg border border-ct-primary/10 hover:border-ct-primary/20 transition-colors group"
            >
              <div className="mb-6 text-lg font-medium text-ct-primary">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold text-ct-dark mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-ct-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
