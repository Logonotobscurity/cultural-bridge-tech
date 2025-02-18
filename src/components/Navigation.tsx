
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
          <Link to="/" className="font-bold text-ct-dark text-xl">
            Cultural Technology
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-ct-primary"
                    : "text-ct-secondary hover:text-ct-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="#donate"
              className="px-4 py-2 bg-ct-primary text-white rounded-lg text-sm font-medium hover:bg-ct-primary/90 transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-ct-dark" />
            ) : (
              <Menu className="w-6 h-6 text-ct-dark" />
            )}
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
            <div className="px-4 py-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-ct-primary"
                      : "text-ct-secondary hover:text-ct-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="#donate"
                className="block px-4 py-2 bg-ct-primary text-white rounded-lg text-sm font-medium hover:bg-ct-primary/90 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
