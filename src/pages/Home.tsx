import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { updatePageSEO, pageSEOData } from "@/utils/seo";
import LazyImage from "@/components/LazyImage";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Star, Globe, Sparkles, Zap, Briefcase, Eye } from "lucide-react";
import {
  WebDesignIcon,
  ChatbotIcon,
  ContentWritingIcon,
  PortfolioIcon,
  LeadGenerationIcon,
} from "@/components/CustomIcons";
import AnimatedBackground from "@/components/AnimatedBackground";
import PortfolioGallery from "@/components/PortfolioGallery";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Home = () => {
  useEffect(() => {
    updatePageSEO({
      ...pageSEOData.home,
      url: window.location.href,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    });
  }, []);

  const services = [
    {
      title: "Portfolio Websites",
      description: "Stunning personal portfolios that showcase your work.",
      icon: <PortfolioIcon className="h-7 w-7" />,
      link: "/services",
    },
    {
      title: "Business Websites",
      description: "Professional websites that drive business growth.",
      icon: <WebDesignIcon className="h-7 w-7" />,
      link: "/services",
    },
    {
      title: "AI Chatbots",
      description: "Intelligent automation for customer engagement.",
      icon: <ChatbotIcon className="h-7 w-7" />,
      link: "/services",
    },
    {
      title: "Content Writing",
      description: "Compelling content that converts and engages.",
      icon: <ContentWritingIcon className="h-7 w-7" />,
      link: "/services",
    },
    {
      title: "Lead Generation",
      description: "Targeted strategies to help you grow your business and connect with high-quality prospects.",
      icon: <LeadGenerationIcon className="h-7 w-7" />,
      link: "/services",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "StyleHub",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content:
        "Harsh transformed our outdated website into a modern, user-friendly platform that significantly increased our conversion rates.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "TechSolutions",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      content:
        "The chatbot Harsh developed has reduced our support ticket volume by 40% and improved customer satisfaction scores.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amanda Rodriguez",
      role: "Content Manager",
      company: "FinanceWise",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda",
      content:
        "Harsh's content strategy helped us establish authority in our niche and increased our organic traffic by 150%.",
      rating: 5,
    },
  ];

  // Taglines for animation
  const taglines = [
    {
      text: (
        <>
          🚀 <span className="animated-highlight">Elevate</span> Your Ideas to New Heights!
        </>
      ),
      highlight: "Elevate",
    },
    {
      text: (
        <>
          ✨ <span className="animated-highlight">Innovative</span> Solutions for a Digital World.
        </>
      ),
      highlight: "Innovative",
    },
    {
      text: (
        <>
          🎨 Turning Concepts into <span className="animated-highlight">Stunning</span> Realities.
        </>
      ),
      highlight: "Stunning",
    },
  ];
  const [taglineIndex, setTaglineIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Inspired Redesign */}
      <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between min-h-[80vh] py-20 px-4 md:px-12 lg:px-24 overflow-hidden bg-background">
        {/* Animated radial background gradient */}
        <motion.div
          className="absolute left-0 top-0 w-[60vw] h-[60vw] lg:w-[40vw] lg:h-[40vw] rounded-full bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent blur-2xl opacity-70 z-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center z-10 text-left">
          {/* Badge */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm shadow-sm">
              <span className="mr-2">✨</span>Available for freelance projects
            </span>
          </motion.div>
          {/* Headline with gradient accent */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-[Poppins] mb-6 text-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm Harsh<br />
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-primary via-green-400 to-pink-400 bg-clip-text text-transparent">
                Professional Digital Solutions
              </span>
            </span>
          </motion.h1>
          {/* Animated Tagline */}
          <motion.div
            key={taglineIndex}
            className="mb-8 min-h-[2.5em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-lg md:text-xl font-semibold">
              {taglines[taglineIndex].text}
            </span>
          </motion.div>
          {/* Buttons */}
          <motion.div
            className="flex gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="text-lg font-semibold px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300 flex items-center gap-2 border-2 border-transparent hover:border-primary scale-100 hover:scale-105"
              asChild
            >
              <Link to="/portfolio">
                Explore My Work
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg font-semibold px-8 py-6 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Hire Me
              </Link>
            </Button>
          </motion.div>
        </div>
        {/* Floating illustration */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-12 lg:mb-0 z-10">
          <motion.div
            className="relative flex items-center justify-center h-[320px] w-[320px] md:h-[400px] md:w-[400px] lg:h-[420px] lg:w-[420px]"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-pink-200/20 to-transparent blur-2xl opacity-80" />
            {/* Palette icon or placeholder illustration */}
            <span className="flex items-center justify-center h-32 w-32 rounded-full bg-white shadow-lg border border-muted">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#FDE68A" />
                <ellipse cx="12" cy="15" rx="7" ry="5" fill="#FCA5A5" />
                <circle cx="9" cy="13" r="1.2" fill="#60A5FA" />
                <circle cx="15" cy="13" r="1.2" fill="#34D399" />
                <circle cx="12" cy="11" r="1.2" fill="#F472B6" />
                <circle cx="14" cy="17" r="0.8" fill="#FBBF24" />
                <circle cx="10" cy="17" r="0.8" fill="#A78BFA" />
              </svg>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Professional */}
      <section className="relative py-20 px-4 bg-muted/30 dark:bg-muted/10 overflow-hidden">
        {/* Soft background gradient */}
        <motion.div
          className="absolute right-0 top-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-primary/10 via-pink-200/10 to-transparent blur-2xl opacity-60 z-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
              <span className="bg-gradient-to-r from-primary via-green-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Specialized services designed to elevate your digital presence and drive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <Card className="h-full bg-card/60 border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                  <CardHeader>
                    <motion.div
                      className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 font-semibold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      className="group/btn w-full justify-between text-primary hover:text-primary hover:bg-primary/10 transition-all duration-200"
                      asChild
                    >
                      <Link to={service.link}>
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Professional */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Soft background gradient */}
        <motion.div
          className="absolute left-0 bottom-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-primary/10 via-green-200/10 to-transparent blur-2xl opacity-60 z-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
              <span className="bg-gradient-to-r from-primary via-green-400 to-pink-400 bg-clip-text text-transparent">Client Testimonials</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hear from those who have experienced the results first-hand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <Card className="h-full bg-card/60 border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <Avatar className="ring-2 ring-primary/10">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg font-semibold">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {testimonial.role} at {testimonial.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground"
                          }
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic leading-relaxed text-base">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Professional */}
      <section className="relative py-20 px-4 bg-[#10131a] text-white overflow-hidden dark">
        {/* Soft background gradient */}
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#1e293b]/40 via-[#334155]/30 to-transparent blur-2xl opacity-40 z-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute top-10 right-10 text-white/10"
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
          <Zap className="h-24 w-24" />
        </motion.div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-pink-400 bg-clip-text text-transparent">Ready to Elevate Your Digital Presence?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group bg-white text-[#10131a] hover:bg-white/90 border-none"
                asChild
              >
                <Link to="/contact">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Start Your Project
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold border-2 border-white text-white bg-transparent hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/portfolio">View Examples</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
