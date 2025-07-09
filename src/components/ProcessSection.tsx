import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Palette,
  RefreshCw,
  Rocket,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  duration: string;
}

const ProcessSection = () => {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Consultation & Requirements",
      description:
        "We start by understanding your vision, goals, and specific requirements through detailed discussions.",
      icon: <MessageCircle className="h-8 w-8" />,
      details: [
        "Initial consultation call",
        "Requirements gathering",
        "Project scope definition",
        "Timeline and budget planning",
      ],
      duration: "1-2 days",
    },
    {
      id: 2,
      title: "Design & Development",
      description:
        "I create wireframes, design mockups, and develop your solution using the latest technologies.",
      icon: <Palette className="h-8 w-8" />,
      details: [
        "Wireframe creation",
        "UI/UX design",
        "Development & coding",
        "Regular progress updates",
      ],
      duration: "1-4 weeks",
    },
    {
      id: 3,
      title: "Revisions & Feedback",
      description:
        "We refine the solution based on your feedback to ensure it meets your exact expectations.",
      icon: <RefreshCw className="h-8 w-8" />,
      details: [
        "Client review sessions",
        "Feedback implementation",
        "Testing and optimization",
        "Quality assurance",
      ],
      duration: "3-7 days",
    },
    {
      id: 4,
      title: "Delivery & Support",
      description:
        "Final delivery with comprehensive documentation and ongoing support for your peace of mind.",
      icon: <Rocket className="h-8 w-8" />,
      details: [
        "Final delivery",
        "Documentation & training",
        "Launch support",
        "Ongoing maintenance",
      ],
      duration: "1-2 days",
    },
  ];

  return (
    <section
      className="w-full py-16 px-4 md:px-8 bg-muted/30 dark:bg-muted/10"
      id="process"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            My Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A proven workflow that ensures quality results and client
            satisfaction from start to finish.
          </p>
        </motion.div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.id}
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`${index % 2 === 0 ? "mb-24" : "mt-24"}`}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProcessStepCard step={step} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical View */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-start gap-4"
            >
              {/* Step Number */}
              <motion.div
                className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {step.id}
              </motion.div>

              {/* Vertical Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-primary/30"></div>
              )}

              {/* Card */}
              <div className="flex-1">
                <ProcessStepCard step={step} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Let's discuss your project and see how I can help bring your vision
            to life.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>Let's Collaborate</span>
            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const ProcessStepCard = ({ step }: { step: ProcessStep }) => {
  return (
    <Card className="h-full bg-card/50 backdrop-blur-sm border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors duration-300"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {step.icon}
          </motion.div>
          <div>
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground">{step.duration}</p>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {step.description}
        </p>

        <div className="space-y-2">
          {step.details.map((detail, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 text-sm"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">{detail}</span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessSection;
