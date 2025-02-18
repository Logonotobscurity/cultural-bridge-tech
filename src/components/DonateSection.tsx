
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const tiers = [
  {
    amount: "50",
    title: "Supporter",
    description: "Fund one week of research and development",
  },
  {
    amount: "100",
    title: "Advocate",
    description: "Sponsor a workshop on ethical AI development",
  },
  {
    amount: "250",
    title: "Champion",
    description: "Enable a month of intensive research and advocacy",
  },
];

export const DonateSection = () => {
  return (
    <section id="donate" className="py-20 px-4 bg-ct-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-1 bg-ct-primary/10 text-ct-primary rounded-full text-sm font-medium mb-6 inline-block">
            Support Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ct-dark mb-4">
            Help Shape the Future of Ethical AI
          </h2>
          <p className="text-ct-secondary max-w-2xl mx-auto">
            Your contribution supports our research and advocacy work in developing
            culturally-aware and ethical AI systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-ct-primary/10 hover:border-ct-primary transition-colors group cursor-pointer"
            >
              <div className="mb-4">
                <span className="text-3xl font-bold text-ct-dark">
                  ${tier.amount}
                </span>
                <span className="text-ct-secondary">/once</span>
              </div>
              <h3 className="text-xl font-semibold text-ct-dark mb-2">
                {tier.title}
              </h3>
              <p className="text-ct-secondary mb-6">{tier.description}</p>
              <button className="w-full px-4 py-2 bg-ct-primary/10 text-ct-primary rounded-lg font-medium hover:bg-ct-primary hover:text-white transition-colors">
                Donate Now
              </button>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center flex items-center justify-center gap-2 text-ct-secondary">
          <Shield className="w-4 h-4" />
          <span className="text-sm">Secure payment processing</span>
        </div>
      </div>
    </section>
  );
};
