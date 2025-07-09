import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com",
      icon: Twitter,
      label: "Twitter",
    },
  ];

  return (
    <footer className="bg-[#10131a] text-white py-16 relative overflow-hidden dark border-t-4 border-gradient-to-r from-primary via-green-400 to-pink-400">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10" style={{background: 'radial-gradient(circle at 20% 40%, #fff 1%, transparent 60%), radial-gradient(circle at 80% 60%, #fff 1%, transparent 60%)'}} />
      {/* Background decoration */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-primary via-green-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">Harsh</h3>
            <p className="text-white/90 mb-4 leading-relaxed text-lg font-medium">
              Crafting Digital Solutions for Your Success
            </p>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-pink-400 hover:text-white transition-all duration-300 shadow-md border border-white/10"
                  aria-label={social.label}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2">Services</h3>
            <ul className="space-y-2">
              {[
                "Portfolio Websites",
                "Business Websites",
                "AI-Powered Chatbots",
                "Content Writing",
                "Lead Generation",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/80 hover:text-primary transition-colors duration-300 cursor-pointer font-medium">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:harsh910.dev@gmail.com"
                  className="text-white/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  harsh910.dev@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-white/10 text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70 text-base">
            © {new Date().getFullYear()} <span className="font-bold text-primary">Harsh</span>. All rights reserved. Built with
            <span className="text-pink-400 mx-1">♥</span> passion and precision.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
