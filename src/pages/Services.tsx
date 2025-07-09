import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { updatePageSEO, pageSEOData } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Check,
  Star,
  Zap,
  Globe,
  MessageSquare,
  PenTool,
} from "lucide-react";
import {
  WebDesignIcon,
  ChatbotIcon,
  ContentWritingIcon,
  PortfolioIcon,
  LeadGenerationIcon,
} from "@/components/CustomIcons";

const Services = () => {
  useEffect(() => {
    updatePageSEO({
      ...pageSEOData.services,
      url: window.location.href,
    });
  }, []);

  const services = [
    {
      id: "portfolio-websites",
      title: "Portfolio Websites",
      description:
        "Custom responsive portfolio sites with gallery, contact form, SEO, and analytics.",
      icon: <PortfolioIcon className="h-12 w-12" />,
      price: "New Price: $999",
      duration: "2–3 weeks",
      features: [
        "Custom responsive design",
        "Filterable portfolio gallery",
        "Contact form integration",
        "SEO & performance optimization",
        "Mobile-first & social media integration",
        "Analytics setup",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      color: "from-green-500 to-teal-600",
    },
    {
      id: "business-websites",
      title: "Business Websites",
      description:
        "Business-ready sites with CMS, e-commerce, advanced SEO, and security.",
      icon: <WebDesignIcon className="h-12 w-12" />,
      price: "New Price: $1,999",
      duration: "3–5 weeks",
      features: [
        "Business-ready responsive design",
        "CMS & e-commerce integration",
        "Advanced SEO & payment setup",
        "Multi-language support",
        "Security & performance optimization",
      ],
      technologies: ["React", "Next.js", "Stripe", "Sanity CMS"],
      color: "from-green-500 to-teal-600",
    },
    {
      id: "ai-chatbots",
      title: "AI-Powered Chatbots",
      description:
        "NLP chatbots for web & WhatsApp, with analytics, handoff, and API integration.",
      icon: <ChatbotIcon className="h-12 w-12" />,
      price: "New Price: $1,499",
      duration: "2–4 weeks",
      features: [
        "NLP with OpenAI/Dialogflow",
        "Website & WhatsApp integration",
        "Human handoff & analytics",
        "API integrations + training docs",
      ],
      technologies: ["OpenAI", "Dialogflow", "Node.js", "Python"],
      color: "from-orange-500 to-red-600",
    },
    {
      id: "content-writing",
      title: "Content Writing",
      description:
        "SEO-optimized blog posts, website/product copy, and content strategy.",
      icon: <ContentWritingIcon className="h-12 w-12" />,
      price: "New Price: $399",
      duration: "1–2 weeks",
      features: [
        "SEO-optimized blog posts",
        "Website & product copy",
        "Social media & email content",
        "Content strategy & competitor research",
      ],
      technologies: ["SEMrush", "Grammarly", "Surfer SEO"],
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "lead-generation",
      title: "Lead Generation",
      description:
        "B2B/B2C lead research, outreach, CRM integration, and analytics.",
      icon: <LeadGenerationIcon className="h-12 w-12" />,
      price: "New Price: $599",
      duration: "1–2 weeks",
      features: [
        "B2B/B2C lead research",
        "Email & LinkedIn outreach",
        "CRM & automation integration",
        "Custom lead lists + analytics",
      ],
      technologies: ["Hunter.io", "Apollo.io", "Mailshake"],
      color: "from-blue-500 to-cyan-600",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We discuss your goals, requirements, and create a detailed project roadmap",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Design & Development",
      description:
        "I create wireframes, designs, and develop your solution with regular updates",
      icon: <PenTool className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Testing & Refinement",
      description:
        "Thorough testing, client feedback integration, and final optimizations",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "Deployment, training, documentation, and ongoing support for your success",
      icon: <Globe className="h-6 w-6" />,
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
          <Star className="h-24 w-24" />
        </motion.div>

        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive digital solutions designed to elevate your business
              and achieve your goals. From stunning websites to intelligent
              automation, I've got you covered.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
                  {/* Header with gradient */}
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary/20 transition-colors duration-300"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        {service.icon}
                      </motion.div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {service.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {service.duration}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-6">
                    <div className="flex gap-3 w-full">
                      <Button
                        className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group/btn"
                        asChild
                      >
                        <Link to="/contact">
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="px-8 py-6 text-lg border-primary-foreground/20 text-black dark:text-white hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300"
                        asChild
                      >
                        <Link to="/portfolio">View Examples</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven process that ensures quality results and client
              satisfaction from start to finish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group text-center">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      {step.step}
                    </motion.div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
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
              Why Choose My Services?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets my approach apart and ensures your project's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Personalized Approach",
                description:
                  "Every project is tailored to your specific needs, goals, and brand identity. No cookie-cutter solutions.",
                icon: <Star className="h-6 w-6" />,
              },
              {
                title: "Latest Technologies",
                description:
                  "I use cutting-edge tools and frameworks to ensure your solution is modern, fast, and future-proof.",
                icon: <Zap className="h-6 w-6" />,
              },
              {
                title: "Ongoing Support",
                description:
                  "Your success is my priority. I provide comprehensive support and maintenance even after project completion.",
                icon: <MessageSquare className="h-6 w-6" />,
              },
              {
                title: "Proven Results",
                description:
                  "With 50+ successful projects and 100% client satisfaction, you can trust in the quality of my work.",
                icon: <Globe className="h-6 w-6" />,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors duration-300"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        {benefit.icon}
                      </motion.div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
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
          <Zap className="h-20 w-20" />
        </motion.div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution that
              exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
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
                className="px-8 py-6 text-lg border-primary-foreground/20 text-black dark:text-white hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300"
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

export default Services;
