import React, { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight, TrendingUp, Users, Clock, Star } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    content: string;
    author: string;
    role: string;
    rating: number;
  };
  tags: string[];
  duration: string;
}

const CaseStudiesSection = () => {
  return null;
};

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <div className="absolute top-4 left-4">
            <Badge
              variant="secondary"
              className="bg-background/90 backdrop-blur-sm"
            >
              {study.category}
            </Badge>
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {study.duration}
            </span>
          </div>
        </div>

        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
              {study.title}
            </CardTitle>
          </div>
          <CardDescription className="text-sm text-muted-foreground">
            Client: {study.client}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow space-y-6">
          {/* Problem */}
          <div>
            <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              The Challenge
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {study.problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              The Solution
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {study.solution}
            </p>
          </div>

          {/* Results */}
          <div>
            <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              The Results
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {study.results.map((result, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 bg-muted/30 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-lg font-bold text-green-600">
                    {result.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {result.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Testimonial */}
          <div className="border-t pt-4">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={
                    i < study.testimonial.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  }
                />
              ))}
            </div>
            <p className="text-sm italic text-muted-foreground mb-2">
              &quot;{study.testimonial.content}&quot;
            </p>
            <p className="text-xs font-medium text-primary">
              {study.testimonial.author}, {study.testimonial.role}
            </p>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            variant="outline"
            className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <span>View Full Case Study</span>
            <motion.div
              whileHover={{ x: 2, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={14} className="ml-2" />
            </motion.div>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Default case studies data
const defaultCaseStudies: CaseStudy[] = [
  {
    id: "cs-graphic-designer-portfolio",
    title: "Graphic Designer Portfolio",
    client: "Professional Graphic Designer",
    category: "web-design",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    problem: `1. Dynamic Content Management: Ensuring that the designer can easily update portfolio projects without technical assistance.\n2. Performance Optimization: Achieving fast load times while maintaining high-quality visuals.\n3. Cross-Device Responsiveness: Guaranteeing a flawless design across devices, from desktops to mobile phones.\n4. Brand Representation: Aligning the visual theme with the designer's branding and style.`,
    solution: `Framework and Technology:\n- Used Next.js for a fast and SEO-friendly frontend.\n- Integrated Supabase as the backend for dynamic content management, allowing the designer to add, edit, or remove projects easily.\n- Styled the website with Tailwind CSS for a modern and responsive design.\n\nDynamic Portfolio Section:\n- Created a modular and reusable project card system that fetches data from Supabase in real time.\n- Organized projects into categories: Logos, Advertisements, and UI/UX Designs.\n\nOptimized Performance:\n- Compressed images using TinyPNG to reduce load times.\n- Implemented lazy loading for assets to improve speed.\n\nResponsive Design:\n- Tested the website extensively on various devices using BrowserStack.\n- Used media queries in Tailwind CSS to ensure a consistent experience across all screen sizes.\n\nClient-Centric Features:\n- Included a contact form to capture inquiries, with data stored securely in Supabase.\n- Added call-to-action buttons like 'View My Work' and 'Hire Me' on key pages.`,
    results: [
      { metric: "Brand Visibility", value: "+50%", description: "Increased brand visibility through a professional online presence." },
      { metric: "Performance Score", value: "98%", description: "Achieved on Google Lighthouse." },
      { metric: "Project Delivery", value: "2 weeks", description: "Completed including testing and deployment." },
      { metric: "Responsiveness", value: "100%", description: "Pixel-perfect design on all devices." },
    ],
    testimonial: {
      content: "This portfolio has transformed the way I showcase my work. It's sleek, easy to use, and perfectly represents my creative style. Harsh went above and beyond to deliver exactly what I envisioned!",
      author: "Harsh's Client",
      role: "Professional Graphic Designer",
      rating: 5,
    },
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel", "TinyPNG", "Google Lighthouse", "BrowserStack", "SPA", "Contact Form"],
    duration: "2 weeks",
  },
  {
    id: "1",
    title: "E-Commerce Platform Transformation for StyleHub Fashion",
    client: "StyleHub Fashion",
    category: "web-design",
    image: "/placeholder.svg",
    problem:
      `Outdated Design: The website lacked a responsive design, leading to poor mobile usability.\n\nHigh Bounce Rates: Subpar mobile experience resulted in customers leaving the site prematurely.\n\nComplex Checkout Process: The multi-step checkout process was cumbersome, causing high cart abandonment rates.\n\nLimited Search and Filtering: Inefficient search functionality hindered product discovery.`,
    solution:
      `Mobile-First Redesign:\n- Rebuilt the front-end using React with a focus on responsive and mobile-first design principles.\n- Implemented CSS Grid and Flexbox for adaptive layouts.\n\nStreamlined Checkout Process:\n- Consolidated the multi-step checkout into a single-page application (SPA) using React Context API for state management.\n- Integrated secure payment gateways with seamless API interactions.\n\nEnhanced Product Discovery:\n- Developed an advanced product filtering system using faceted search techniques and Elasticsearch for optimized performance.\n- Integrated predictive search with auto-suggestions powered by Typeahead.js.\n\nPerformance Optimization:\n- Reduced page load times to 2.1 seconds by implementing code-splitting and lazy loading with React, compressing images using WebP format, and using a CDN for faster content delivery.`,
    results: [
      { metric: "Conversion Rate", value: "+65%", description: "Streamlined user experience and simplified checkout process drove higher conversions." },
      { metric: "Mobile Traffic", value: "+120%", description: "Mobile-first redesign attracted and retained more mobile users." },
      { metric: "Page Load Speed", value: "2.1s", description: "Enhanced performance improved user satisfaction and SEO rankings." },
      { metric: "Cart Abandonment", value: "-45%", description: "Simplified checkout and improved navigation significantly reduced drop-offs." },
    ],
    testimonial: {
      content:
        "Harsh completely transformed our online presence. Our sales have increased dramatically, and customers love the new experience.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      rating: 5,
    },
    tags: ["React", "Tailwind CSS", "Axios", "SPA", "Elasticsearch", "Typeahead.js", "Netlify", "Webpack", "Lighthouse", "Sentry"],
    duration: "10 weeks",
  },
  {
    id: "2",
    title: "AI Customer Support Bot",
    client: "SaaS Enterprise",
    category: "chatbot-dev",
    image: "/placeholder.svg",
    problem:
      "Automate customer support, reduce response times, and improve satisfaction. Needed to handle ambiguous queries, context switching, and integrate with Zendesk.",
    solution:
      `High-level summary: Built with Python (Flask API), Dialogflow (NLP), React (widget), Redis (sessions), WebSocket (real-time). Microservices for NLP, session, analytics.\n\nTechnical Challenges: NLU, context switching, agent handoff, scalability.\n\nDevelopment Process: Microservices, Dialogflow, Zendesk, Slack, WebSocket, analytics logging.\n\nImplementation Highlights: Contextual NLP, WebSocket push, agent handoff, analytics.\n\nResults: 60% automation, <10s response, 2m→10s first response.\n\nConclusion: Streamlined support, scalable automation. Future: more integrations.`,
    results: [
      { metric: "Automation Rate", value: "60%", description: "Queries resolved by bot" },
      { metric: "Response Time", value: "<10s", description: "Avg. first response" },
      { metric: "Client Feedback", value: "Game-changer", description: "Support team impact" },
      { metric: "Concurrent Conversations", value: "1000s", description: "Scalable" },
    ],
    testimonial: {
      content:
        "This bot is a game-changer for our support team. It resolves over 60% of incoming queries automatically.",
      author: "John Smith",
      role: "Support Lead, Helpdesk Inc.",
      rating: 5,
    },
    tags: ["Python", "Dialogflow", "Flask", "WebSocket", "Zendesk", "Slack"],
    duration: "10 weeks",
  },
  {
    id: "3",
    title: "Corporate Blog & Content Hub",
    client: "Marketing Agency",
    category: "content-writing",
    image: "/placeholder.svg",
    problem:
      "Increase organic traffic and establish thought leadership. Needed fast load times, semantic HTML, and easy publishing for non-technical users.",
    solution:
      `High-level summary: Headless WordPress CMS, Next.js frontend, Vercel hosting, Tailwind CSS. SSG for performance/SEO, Algolia for search, Google Analytics.\n\nTechnical Challenges: SEO, SSG, rich media, scalable traffic.\n\nDevelopment Process: Next.js getStaticProps, Open Graph, Algolia, analytics.\n\nImplementation Highlights: SSG, rich media, automated SEO, fast loads.\n\nResults: <1s load, 3x organic traffic.\n\nConclusion: High-performance, scalable content hub. Future: AI recommendations.`,
    results: [
      { metric: "Page Load Time", value: "<1s", description: "Global avg." },
      { metric: "Organic Traffic", value: "3x", description: "6 months growth" },
      { metric: "Client Feedback", value: "Exceptional", description: "Content quality" },
      { metric: "SEO Ranking", value: "Top 3", description: "Target keywords" },
    ],
    testimonial: {
      content:
        "Our organic traffic has tripled since launching the new blog. The content quality is exceptional.",
      author: "Samantha Ray",
      role: "Marketing Director, ContentCo",
      rating: 5,
    },
    tags: ["WordPress", "Next.js", "Vercel", "Tailwind CSS", "Algolia", "SEO"],
    duration: "8 weeks",
  },
  {
    id: "4",
    title: "SaaS Application UI/UX Redesign",
    client: "SaaS Startup",
    category: "web-design",
    image: "/placeholder.svg",
    problem:
      "Refactor legacy UI, improve accessibility, and boost user retention. Needed to meet WCAG 2.1 AA and ensure smooth migration.",
    solution:
      `High-level summary: Figma for design, React + Tailwind CSS for frontend, Jest for testing. Component-driven with Storybook, feature flag rollout.\n\nTechnical Challenges: Accessibility, legacy code, performance.\n\nDevelopment Process: Atomic design, ARIA, Jest, feature flags.\n\nImplementation Highlights: Reusable components, semantic HTML, 90%+ test coverage.\n\nResults: +18% retention, full accessibility.\n\nConclusion: Modern, accessible, maintainable UI. Future: more features.`,
    results: [
      { metric: "User Retention", value: "+18%", description: "Post-launch" },
      { metric: "Accessibility", value: "100%", description: "WCAG 2.1 AA" },
      { metric: "Test Coverage", value: "90%+", description: "Jest unit tests" },
      { metric: "Client Feedback", value: "Intuitive", description: "App usability" },
    ],
    testimonial: {
      content:
        "The redesign has made our app much more intuitive and accessible.",
      author: "Product Owner",
      role: "SaaS Startup",
      rating: 5,
    },
    tags: ["Figma", "React", "Tailwind CSS", "Jest", "Storybook", "WCAG"],
    duration: "6 weeks",
  },
  {
    id: "5",
    title: "Lead Generation Chatbot",
    client: "Real Estate Agency",
    category: "chatbot-dev",
    image: "/placeholder.svg",
    problem:
      "Automate lead qualification and property viewing scheduling. Needed NLP, calendar integration, and secure data handling.",
    solution:
      `High-level summary: Rasa (NLP), Python backend, React frontend, Calendly API. Event-driven microservices, Google Calendar, SMS notifications.\n\nTechnical Challenges: NLP, scheduling, privacy.\n\nDevelopment Process: Rasa NLU, booking, SMS, Google Calendar.\n\nImplementation Highlights: Custom NLU, real-time booking, SMS confirmations.\n\nResults: 70% leads qualified, 50% less manual scheduling.\n\nConclusion: Automated, efficient lead process. Future: more integrations.`,
    results: [
      { metric: "Lead Qualification", value: "70%", description: "Via chatbot" },
      { metric: "Manual Workload", value: "-50%", description: "Scheduling" },
      { metric: "Client Feedback", value: "Streamlined", description: "Lead process" },
      { metric: "Booking Efficiency", value: "+50%", description: "Faster scheduling" },
    ],
    testimonial: {
      content:
        "The chatbot has streamlined our lead process and improved our response time.",
      author: "Agency Owner",
      role: "Real Estate",
      rating: 5,
    },
    tags: ["Rasa", "Python", "React", "Calendly API", "Google Calendar", "NLP"],
    duration: "7 weeks",
  },
  {
    id: "6",
    title: "Brand Voice & Style Guide",
    client: "Enterprise",
    category: "content-writing",
    image: "/placeholder.svg",
    problem:
      "Create a scalable, maintainable brand voice and style guide. Needed stakeholder alignment, modular docs, and org-wide adoption.",
    solution:
      `High-level summary: Notion for docs, Figma for visuals, Markdown export. Modular docs, version control, onboarding integration.\n\nTechnical Challenges: Alignment, documentation, adoption.\n\nDevelopment Process: Voice principles, templates, Git versioning.\n\nImplementation Highlights: Tone/style, templates, versioning.\n\nResults: 100% adoption, 30% faster content review.\n\nConclusion: Unified, efficient brand voice. Future: more templates.`,
    results: [
      { metric: "Adoption", value: "100%", description: "Org-wide" },
      { metric: "Review Cycle", value: "-30%", description: "Faster content" },
      { metric: "Client Feedback", value: "Unified", description: "Brand voice" },
      { metric: "Efficiency", value: "+30%", description: "Content production" },
    ],
    testimonial: {
      content:
        "The style guide has unified our brand voice across all teams.",
      author: "Marketing Lead",
      role: "Enterprise",
      rating: 5,
    },
    tags: ["Notion", "Figma", "Markdown", "Git", "Branding"],
    duration: "5 weeks",
  },
];

export default CaseStudiesSection;
