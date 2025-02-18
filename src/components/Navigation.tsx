
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/concepts", label: "Concepts" },
    { to: "/applications", label: "Applications" },
    { to: "/ethics", label: "Ethics" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-ct-primary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="font-bold text-ct-dark text-xl tracking-[0.2em] uppercase"
          >
            ÀṢÀ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors tracking-wide ${
                  location.pathname === link.to
                    ? "text-ct-primary"
                    : "text-ct-secondary hover:text-ct-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-4 w-px bg-ct-primary/10" />
            <Link
              to="#donate"
              className="text-sm font-medium text-ct-primary hover:text-ct-dark transition-colors tracking-wide"
            >
              Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-px bg-ct-primary transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-6 h-px bg-ct-primary transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-px bg-ct-primary transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-ct-primary/10"
          >
            <div className="px-4 py-6 space-y-6">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-sm font-medium transition-colors tracking-wide ${
                    location.pathname === link.to
                      ? "text-ct-primary"
                      : "text-ct-secondary hover:text-ct-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px w-full bg-ct-primary/10" />
              <Link
                to="#donate"
                className="block text-sm font-medium text-ct-primary hover:text-ct-dark transition-colors tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
