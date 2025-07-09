import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LazyImage from "@/components/LazyImage";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
  testimonial?: Testimonial;
}

const PortfolioGallery = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  const [filter, setFilter] = useState<string>("all");
  const [openCaseStudy, setOpenCaseStudy] = useState<Project | null>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background" id="portfolio">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            My Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore my recent projects across web design, chatbot development,
            and content writing. Each project represents my commitment to
            quality and client satisfaction.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TabsList className="flex flex-wrap justify-center mb-8 bg-muted/50 backdrop-blur-sm">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TabsTrigger
                    value={category}
                    onClick={() => setFilter(category)}
                    className="capitalize hover:bg-primary/10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                  >
                    {category}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </motion.div>

          <TabsContent value={filter} className="mt-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              layout
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  layout
                >
                  <ProjectCard project={project} onViewCaseStudy={() => setOpenCaseStudy(project)} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* Modal for case study */}
        <Dialog open={!!openCaseStudy} onOpenChange={() => setOpenCaseStudy(null)}>
          <DialogContent>
            {openCaseStudy && (
              <>
                <DialogHeader>
                  <DialogTitle>{openCaseStudy.title}</DialogTitle>
                  <DialogDescription>{openCaseStudy.description}</DialogDescription>
                </DialogHeader>
                <img src={openCaseStudy.image} alt={openCaseStudy.title} className="w-full rounded mb-4" />
                <div className="flex flex-wrap gap-2 mb-4">
                  {openCaseStudy.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <Button asChild className="w-full" variant="ghost" onClick={() => setOpenCaseStudy(null)}>
                  <span>Close</span>
                </Button>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, onViewCaseStudy }: { project: Project; onViewCaseStudy: () => void }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="group"
    >
      <Card className="h-full flex flex-col overflow-hidden border bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
        <div className="relative aspect-video overflow-hidden">
          <LazyImage
            src={project.image}
            alt={`${project.title} - ${project.description}`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
              {project.title}
            </CardTitle>
            <Badge
              variant="outline"
              className="capitalize group-hover:border-primary/50 transition-colors duration-300"
            >
              {project.category}
            </Badge>
          </div>
          <CardDescription className="mt-2 leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  className="text-xs hover:bg-primary/10 transition-colors duration-200"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        {project.testimonial && (
          <CardContent className="border-t pt-4 mt-auto">
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Avatar className="ring-2 ring-primary/10">
                <AvatarImage
                  src={project.testimonial.avatar}
                  alt={project.testimonial.name}
                />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {project.testimonial.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star
                        size={14}
                        className={
                          i < project.testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm italic mb-1 text-muted-foreground">
                  "{project.testimonial.content}"
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {project.testimonial.name}
                  <span className="font-normal text-muted-foreground">
                    , {project.testimonial.role} at{" "}
                    {project.testimonial.company}
                  </span>
                </p>
              </div>
            </motion.div>
          </CardContent>
        )}
        <CardFooter className="mt-auto pt-4 flex gap-2">
          <Button
            variant="ghost"
            className="w-1/2 justify-center text-primary hover:text-primary hover:bg-primary/10 group/btn"
            asChild
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
              <ExternalLink className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="w-1/2 justify-center text-primary border-primary group/btn"
            asChild
          >
            <a onClick={onViewCaseStudy}>
              View Case Study
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Default projects data
const defaultProjects: Project[] = [
  {
    id: "proj-graphic-designer",
    title: "Graphic Designer Portfolio",
    description:
      `A dynamic and visually appealing website for a professional graphic designer, showcasing expertise in logo design, advertisement creation, and UI/UX design. Features include a responsive layout, dynamic content fetching via Supabase, and a streamlined contact form for client inquiries.\n\nAchievements:\n- Increased the designer's brand visibility by 50%.\n- Achieved a 98% performance score on Google Lighthouse.\n- Completed the project within 2 weeks, including testing and deployment.`,
    category: "web-design",
    image: "/graphic-designer-3.png",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel", "TinyPNG", "Google Lighthouse"],
    link: "https://graphic-designer-portfolio-delta.vercel.app/",
    testimonial: {
      id: "test-graphic-designer",
      name: "Harsh's Client",
      role: "Professional Graphic Designer",
      company: "-",
      avatar: "/0bpC.png",
      content: "This portfolio has transformed the way I showcase my work. It's sleek, easy to use, and perfectly represents my creative style. Harsh went above and beyond to deliver exactly what I envisioned!",
      rating: 5,
    },
  },
  {
    id: "proj-1",
    title: "E-commerce Platform",
    description:
      "A feature-rich online store with a custom CMS and seamless payment integration.",
    category: "web-design",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    link: "#",
    testimonial: {
      id: "test-1",
      name: "Jane Doe",
      role: "CEO",
      company: "Shopify",
      avatar: "/placeholder.svg",
      content:
        "The new platform has revolutionized our online sales. The user experience is fantastic, and we've seen a 40% increase in conversions.",
      rating: 5,
    },
  },
  {
    id: "proj-2",
    title: "AI Customer Support Bot",
    description:
      "An intelligent chatbot that handles customer queries 24/7, reducing response times and improving satisfaction.",
    category: "chatbot-dev",
    image: "/placeholder.svg",
    tags: ["Python", "Dialogflow", "Flask", "WebSocket"],
    link: "#",
    testimonial: {
      id: "test-2",
      name: "John Smith",
      role: "Support Lead",
      company: "Helpdesk Inc.",
      avatar: "/placeholder.svg",
      content:
        "This bot is a game-changer for our support team. It resolves over 60% of incoming queries automatically.",
      rating: 5,
    },
  },
  {
    id: "proj-3",
    title: "Corporate Blog & Content Hub",
    description:
      "A comprehensive content platform with SEO-optimized articles, case studies, and whitepapers.",
    category: "content-writing",
    image: "/placeholder.svg",
    tags: ["WordPress", "SEO", "Copywriting", "Content Strategy"],
    link: "#",
    testimonial: {
      id: "test-3",
      name: "Samantha Ray",
      role: "Marketing Director",
      company: "ContentCo",
      avatar: "/placeholder.svg",
      content:
        "Our organic traffic has tripled since launching the new blog. The content quality is exceptional.",
      rating: 5,
    },
  },
  {
    id: "proj-4",
    title: "SaaS Application UI/UX",
    description:
      "A complete redesign of a SaaS product, focusing on user-centric design and intuitive navigation.",
    category: "web-design",
    image: "/placeholder.svg",
    tags: ["Figma", "React", "User Research", "Prototyping"],
    link: "#",
  },
  {
    id: "proj-5",
    title: "Lead Generation Chatbot",
    description:
      "A chatbot for a real estate agency that qualifies leads and schedules property viewings.",
    category: "chatbot-dev",
    image: "/placeholder.svg",
    tags: ["Rasa", "Python", "Lead Qualification", "Calendly API"],
    link: "#",
  },
  {
    id: "proj-6",
    title: "Brand Voice & Style Guide",
    description:
      "Developed a comprehensive brand voice and style guide to ensure consistent messaging across all channels.",
    category: "content-writing",
    image: "/placeholder.svg",
    tags: ["Branding", "Tone of Voice", "Style Guide", "Content Governance"],
    link: "#",
  },
  {
    id: "shoe-brand-marketing",
    title: "Shoe Brand Marketing Website",
    description:
      "A sleek and modern marketing website designed for a shoe brand, focusing on responsive design, engaging visuals, and seamless user experience to enhance brand visibility and customer engagement.",
    category: "web-design",
    image: "/shoe-brand.png",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Marketing",
      "Responsive Design"
    ],
    link: "https://shoe-brand-marketing-website.vercel.app/",
  },
  {
    id: "interest-hub",
    title: "InterestHub",
    description:
      `A full-stack web application solving fragmented content discovery for people with shared interests. Traditional platforms are too cluttered or niche, leaving users without dedicated spaces to connect.\n\nInterestHub provides a focused platform for interest-based communities and personalized content feeds.\n\nKey Features:\n- Community creation and discovery\n- Personalized content feed\n- Real-time discussions\n- User authentication\n- Responsive design\n\nAchievements:\n- React + TypeScript + Supabase\n- 95%+ Lighthouse score\n- Deployed on Vercel`,
    category: "web-design",
    image: "/interest-hub.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "Full-Stack"
    ],
    link: "https://interest-hub.vercel.app/",
    testimonial: {
      id: "test-interest-hub",
      name: "Alex Chen",
      role: "Product Manager",
      company: "CommunityTech",
      avatar: "/placeholder.svg",
      content: "InterestHub exceeded our expectations! The platform is intuitive, fast, and perfectly captures the essence of community building. Harsh delivered a production-ready application that our users love.",
      rating: 5,
    },
  },
];

export default PortfolioGallery;
