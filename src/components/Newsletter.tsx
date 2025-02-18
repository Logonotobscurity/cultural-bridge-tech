
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <section className="py-20 px-4 bg-ct-light">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <div className="w-16 h-1 bg-ct-primary mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-ct-dark mb-4">
              Stay Updated
            </h2>
            <p className="text-ct-secondary max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on ethical AI
              development and cultural technology integration.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-ct-primary/20 focus:outline-none focus:border-ct-primary bg-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-ct-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
