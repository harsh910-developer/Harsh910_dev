import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroIllustration } from "./CustomIcons";

interface HeroSectionProps {
  name?: string;
  tagline?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
}

const HeroSection = ({
  name = "Harsh",
  tagline = "Transforming Ideas into Reality",
  description = "I specialize in creating stunning websites, AI-powered chatbots, and compelling content that helps businesses grow and connect with their audience.",
  ctaText = "Let's Work Together",
  ctaLink = "#contact",
  imageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-[700px] flex items-center bg-background py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background decorative elements */}
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
        <Sparkles className="h-16 w-16" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-primary/5"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <HeroIllustration className="h-24 w-24" />
      </motion.div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I'm {name} —
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {tagline}
            </motion.h2>
          </div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="pt-4 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="group text-base px-6 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group text-base px-6 py-6 border-2 hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.02, rotateY: -2 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent rounded-2xl z-10"
            animate={{
              background: [
                "linear-gradient(45deg, hsl(var(--primary) / 0.2), transparent)",
                "linear-gradient(45deg, hsl(var(--primary) / 0.3), transparent)",
                "linear-gradient(45deg, hsl(var(--primary) / 0.2), transparent)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={imageUrl}
            alt={`${name} - Professional Portrait`}
            className="w-full h-full object-cover rounded-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating elements */}
          <motion.div
            className="absolute top-4 right-4 w-3 h-3 bg-primary/60 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-6 left-6 w-2 h-2 bg-primary/40 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
