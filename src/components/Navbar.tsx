import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b shadow-2xl shadow-primary/10"
          : "bg-background/80 backdrop-blur-md border-b"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with animated accent dot */}
        <motion.div
          className="flex items-center gap-2 select-none"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/" className="text-2xl font-extrabold text-foreground flex items-center gap-1">
            Harsh
            <motion.span
              className="inline-block h-3 w-3 rounded-full bg-gradient-to-tr from-primary via-green-400 to-pink-400 ml-1"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <motion.div
              key={item.name}
              className="relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
            >
              <Link
                to={item.path}
                className={`text-lg font-semibold px-2 py-1 transition-colors relative ${
                  location.pathname === item.path
                    ? "text-transparent bg-gradient-to-r from-primary via-green-400 to-pink-400 bg-clip-text"
                    : "text-foreground hover:text-primary"
                }`}
                style={{ letterSpacing: "0.01em" }}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-1 rounded bg-gradient-to-r from-primary via-green-400 to-pink-400"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <DarkModeToggle />
          <motion.div
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              size="sm"
              className="ml-4 px-6 py-2 font-semibold border-2 border-transparent bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 relative overflow-hidden group"
              asChild
            >
              <Link to="/contact">
                <span className="relative z-10">Let's Collaborate</span>
                <span className="absolute inset-0 rounded border-2 border-gradient-to-r from-primary via-green-400 to-pink-400 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none transition-opacity duration-300" />
              </Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <DarkModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t shadow-2xl shadow-primary/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.12 }}
                >
                  <Link
                    to={item.path}
                    className={`text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 block ${
                      location.pathname === item.path ? "text-primary" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.12 }}
              >
                <Button
                  className="mt-4 w-full px-6 py-2 font-semibold border-2 border-transparent bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 relative overflow-hidden group"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/contact">
                    <span className="relative z-10">Let's Collaborate</span>
                    <span className="absolute inset-0 rounded border-2 border-gradient-to-r from-primary via-green-400 to-pink-400 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none transition-opacity duration-300" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
