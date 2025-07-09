import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  WebDesignIcon,
  ChatbotIcon,
  ContentWritingIcon,
  PortfolioIcon,
  LeadGenerationIcon,
} from "./CustomIcons";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  link = "#",
}: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-white dark:bg-gray-800/50 border-0 shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 backdrop-blur-sm group">
        <CardHeader>
          <motion.div
            className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Expert solutions tailored to your needs
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            variant="ghost"
            className="group/btn flex-1 justify-between text-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
            onClick={() => navigate(link)}
          >
            <span>Learn more</span>
            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Quote
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ServiceSection = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Portfolio Websites",
      description:
        "Customized portfolio websites that showcase your work and skills with a unique design that represents your personal brand.",
      icon: <PortfolioIcon className="h-8 w-8" />,
      link: "/services/portfolio-websites",
    },
    {
      title: "Business Websites",
      description:
        "Modern, responsive business websites designed to attract customers, showcase your products or services, and grow your online presence.",
      icon: <WebDesignIcon className="h-8 w-8" />,
      link: "/services/business-websites",
    },
    {
      title: "AI-Powered Chatbots",
      description:
        "Intelligent chatbots that automate customer interactions, answer questions, and engage visitors on your website 24/7.",
      icon: <ChatbotIcon className="h-8 w-8" />,
      link: "/services/chatbots",
    },
    {
      title: "Content Writing",
      description:
        "Compelling content for blogs, websites, and marketing campaigns that engages your audience and improves your SEO rankings.",
      icon: <ContentWritingIcon className="h-8 w-8" />,
      link: "/services/content-writing",
    },
    {
      title: "Lead Generation",
      description:
        "Targeted lead generation strategies to help you grow your business and connect with high-quality prospects.",
      icon: <LeadGenerationIcon className="h-8 w-8" />,
      link: "/services/lead-generation",
    },
  ];

  return (
    <section
      className="py-16 px-4 bg-gray-50/50 dark:bg-gray-900/30 backdrop-blur-sm"
      id="services"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            My Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Transforming ideas into reality with creative solutions tailored to
            your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Request a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
