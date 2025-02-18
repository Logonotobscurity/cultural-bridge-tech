
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-white border-t border-ct-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-ct-dark mb-4">
              Cultural Technology
            </h3>
            <p className="text-ct-secondary max-w-md">
              Exploring the harmonious integration of traditional knowledge and
              modern technology in AI development.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-ct-dark mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-ct-secondary hover:text-ct-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="text-ct-secondary hover:text-ct-primary transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#donate"
                  className="text-ct-secondary hover:text-ct-primary transition-colors"
                >
                  Support Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-ct-dark mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@culturaltech.org"
                  className="text-ct-secondary hover:text-ct-primary transition-colors"
                >
                  contact@culturaltech.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-ct-primary/10 text-center text-ct-secondary flex items-center justify-center gap-2">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-ct-primary" />
          <span>by Cultural Technology</span>
        </div>
      </div>
    </footer>
  );
};
