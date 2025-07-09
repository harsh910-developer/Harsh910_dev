import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { updatePageSEO, pageSEOData } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import PortfolioGallery from "@/components/PortfolioGallery";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { ArrowRight, Eye, ExternalLink } from "lucide-react";

const Portfolio = () => {
  useEffect(() => {
    updatePageSEO({
      ...pageSEOData.portfolio,
      url: window.location.href,
    });
  }, []);

  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      description: "Successful deliveries across various industries",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Every client has been thrilled with the results",
    },
    {
      number: "4+",
      label: "Years Experience",
      description: "Continuous learning and skill development",
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Always here when you need assistance",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 text-primary/10"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Eye className="h-24 w-24" />
        </motion.div>

        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore my recent work across web design, AI chatbot development,
              and content writing. Each project represents a unique challenge
              solved with creativity and technical expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  document
                    .getElementById("portfolio-gallery")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Eye className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <motion.section
        id="portfolio-gallery"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <PortfolioGallery />
      </motion.section>

      {/* Case Studies */}
      <motion.section
        className="bg-muted/30 dark:bg-muted/10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <CaseStudiesSection />
      </motion.section>

      {/* Process Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Approach to Every Project
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures quality results and client
              satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Research & Strategy",
                description:
                  "I start by understanding your business, target audience, and goals to create a strategic foundation for the project.",
                points: [
                  "Market research",
                  "Competitor analysis",
                  "User persona development",
                  "Goal setting",
                ],
              },
              {
                title: "Design & Development",
                description:
                  "Using modern tools and frameworks, I create solutions that are both beautiful and functional.",
                points: [
                  "Wireframing",
                  "UI/UX design",
                  "Development",
                  "Testing",
                ],
              },
              {
                title: "Optimization & Launch",
                description:
                  "Before launch, I ensure everything is optimized for performance, SEO, and user experience.",
                points: [
                  "Performance optimization",
                  "SEO setup",
                  "Quality assurance",
                  "Launch preparation",
                ],
              },
              {
                title: "Support & Growth",
                description:
                  "Post-launch support and ongoing optimization to ensure your project continues to succeed.",
                points: [
                  "Monitoring",
                  "Updates",
                  "Support",
                  "Growth strategies",
                ],
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group h-full">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {phase.description}
                  </p>
                  <ul className="space-y-2">
                    {phase.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 text-primary-foreground/10"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ExternalLink className="h-20 w-20" />
        </motion.div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Inspired by What You've Seen?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Your project could be the
              next success story in my portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link to="/contact">
                  Let's Collaborate
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-primary-foreground/20 text-black dark:text-white bg-background dark:bg-black hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
