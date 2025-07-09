import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { updatePageSEO, pageSEOData } from "@/utils/seo";
import LazyImage from "@/components/LazyImage";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Award,
  Users,
  Clock,
  Target,
  Heart,
  Lightbulb,
  CheckCircle,
  Trophy,
} from "lucide-react";

const About = () => {
  useEffect(() => {
    updatePageSEO({
      ...pageSEOData.about,
      url: window.location.href,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    });
  }, []);

  const milestones = [
    {
      year: "2020",
      title: "Started Freelancing Journey",
      description: "Began offering web design services to local businesses",
      icon: <Lightbulb className="h-5 w-5" />,
    },
    {
      year: "2021",
      title: "Expanded to AI Solutions",
      description: "Added chatbot development to service offerings",
      icon: <Target className="h-5 w-5" />,
    },
    {
      year: "2022",
      title: "Content Writing Expertise",
      description: "Developed comprehensive content strategy services",
      icon: <Award className="h-5 w-5" />,
    },
    {
      year: "2023",
      title: "50+ Successful Projects",
      description:
        "Reached milestone of 50 completed projects with 100% client satisfaction",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "Every project is crafted with meticulous attention to detail and highest standards",
      icon: <Award className="h-8 w-8" />,
    },
    {
      title: "Client-Centric",
      description:
        "Your success is my success. I prioritize understanding and exceeding your expectations",
      icon: <Heart className="h-8 w-8" />,
    },
    {
      title: "Innovation Driven",
      description:
        "Staying ahead of trends and technologies to deliver cutting-edge solutions",
      icon: <Lightbulb className="h-8 w-8" />,
    },
  ];

  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "AI & Chatbots", level: 85 },
    { name: "Content Strategy", level: 92 },
    { name: "SEO Optimization", level: 88 },
    { name: "Project Management", level: 94 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background/80 py-16 px-4 md:px-8 lg:px-16">
      {/* About Section - Redesigned */}
      <section className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tight mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Harsh
        </motion.h1>
        <motion.p
          className="text-xl text-primary font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Digital Solutions Architect & Creative Problem Solver
        </motion.p>
        <motion.div
          className="space-y-4 text-muted-foreground leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            With over 4 years of experience in digital solutions, I've helped businesses transform their online presence through innovative web design, intelligent automation, and strategic content creation.
          </p>
          <p>
            My journey began with a passion for creating beautiful, functional websites. Today, I specialize in comprehensive digital solutions that combine cutting-edge technology with human-centered design principles.
          </p>
          <p>
            I believe in the power of collaboration and take pride in building long-term relationships with my clients, understanding their unique challenges, and delivering solutions that exceed expectations.
          </p>
        </motion.div>
        {/* Achievements */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
          <motion.div
            className="flex flex-col items-center bg-card/80 rounded-xl shadow-lg px-8 py-6 border border-primary/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Trophy className="h-10 w-10 text-yellow-500 mb-2" />
            <span className="text-2xl font-bold">100%</span>
            <span className="text-lg font-semibold text-primary">Client Satisfaction</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-card/80 rounded-xl shadow-lg px-8 py-6 border border-primary/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <CheckCircle className="h-10 w-10 text-green-500 mb-2" />
            <span className="text-2xl font-bold">50+</span>
            <span className="text-lg font-semibold text-primary">Projects Completed</span>
          </motion.div>
        </div>
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            asChild
          >
            <Link to="/contact">
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg border-2 text-foreground hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link to="/portfolio">View My Work</Link>
          </Button>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every project and client relationship
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group text-center">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      {value.icon}
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in my freelancing career and professional growth
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative flex items-start gap-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {milestone.icon}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 pb-8"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="bg-card/50 backdrop-blur-sm border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant="outline"
                            className="text-primary border-primary"
                          >
                            {milestone.year}
                          </Badge>
                          <CardTitle className="text-lg">
                            {milestone.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="leading-relaxed">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technical skills and areas of expertise that drive successful
              project outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how my experience and expertise can help bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
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

export default About;
