import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import { updatePageSEO, pageSEOData } from "@/utils/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Contact = () => {
  useEffect(() => {
    updatePageSEO({
      ...pageSEOData.contact,
      url: window.location.href,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Replace standard AnimatedBackground with enhanced version */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes - theme aware with contact-specific colors */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/15 dark:bg-primary/25 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
    
        <motion.div
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-primary/10 dark:bg-primary/30 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
    
        <motion.div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary/10 dark:bg-primary/40 rounded-full blur-xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
    
        {/* Contact-specific decorative elements */}
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
    
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
    
        {/* Grid pattern - theme aware */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]" />
      </div>
      
      {/* Rest of the page content */}
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 inline-block relative">
              Get In Touch
              <span className="block h-1 w-2/3 mx-auto mt-2 bg-gradient-to-r from-primary to-primary/60 rounded-full animate-pulse"></span>
            </h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to bring your vision to life? Let's discuss your project and
              create something amazing together.
            </motion.p>
            
            {/* Add this new element - decorative icons */}
            <motion.div 
              className="flex justify-center gap-8 mt-8 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {['💬', '📱', '💻', '🚀'].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="text-4xl bg-muted/30 dark:bg-muted/20 p-4 rounded-2xl shadow-md"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {emoji}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      
      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about my services and process.
            </p>
          </motion.div>

          <Accordion type="multiple" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity and scope. A typical portfolio website takes 2-3 weeks, while more complex projects may take 4-8 weeks. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you offer ongoing maintenance?",
                answer: "Yes, I offer various maintenance packages to keep your website secure, updated, and performing optimally. We can discuss the right maintenance plan for your needs."
              },
              {
                question: "What is your payment structure?",
                answer: "I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments."
              },
              {
                question: "Can you help with content creation?",
                answer: "Absolutely! I offer content writing services to help craft compelling copy for your website. I can also assist with sourcing high-quality images and creating graphics."
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-background rounded-lg shadow-md border border-border/50">
                <AccordionTrigger className="text-lg font-semibold text-primary px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's turn your vision into reality. Reach out today and let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Send a Message
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
