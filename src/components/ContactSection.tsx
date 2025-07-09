import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const sanitizeInput = (input: string): string => {
    // Basic input sanitization to prevent XSS
    return input
      .replace(/[<>"'&]/g, (match) => {
        const entities: { [key: string]: string } = {
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "&": "&amp;",
        };
        return entities[match] || match;
      })
      .trim();
  };

  const onSubmit = async (data: FormValues) => {
    // Sanitize all form inputs
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      service: sanitizeInput(data.service),
      message: sanitizeInput(data.message),
    };

    // Validate email format (additional security)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Rate limiting check (basic client-side)
    const lastSubmission = localStorage.getItem("lastFormSubmission");
    const now = Date.now();
    if (lastSubmission && now - parseInt(lastSubmission) < 60000) {
      // 1 minute cooldown
      alert("Please wait a moment before submitting another message.");
      return;
    }

    // Store submission timestamp
    localStorage.setItem("lastFormSubmission", now.toString());

    // TODO: Replace these with your actual EmailJS service/template/public key
    const SERVICE_ID = 'service_7ciwfcy';
    const TEMPLATE_ID = 'template_el8s5cr';
    const PUBLIC_KEY = 'YD2Y-CRBdmT4TqYLX';

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: sanitizedData.name,
          from_email: sanitizedData.email,
          service: sanitizedData.service,
          message: sanitizedData.message,
        },
        PUBLIC_KEY
      );
      form.reset();
      alert('Thank you for your message! I will get back to you soon.');
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try again later.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 lg:px-16 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Let's Collaborate
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss your project and
            create something amazing together.
          </p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="default"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 px-8 py-4 text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group flex items-center gap-2 text-primary-foreground"
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:scale-125" />
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              className="shadow-2xl border-0 bg-card/60 backdrop-blur-lg hover:shadow-3xl hover:scale-[1.02] transition-all duration-500"
              id="contact-form"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Send Me a Message
                </h3>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Add form progress indicator */}
                    <div className="w-full bg-muted/30 h-1 rounded-full mb-8 overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ 
                          width: Object.keys(form.formState.dirtyFields).length > 0 
                            ? `${(Object.keys(form.formState.dirtyFields).length / 4) * 100}%` 
                            : '5%' 
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    
                    {/* Existing form fields with enhanced styling */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground/80 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block"></span>
                                Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="focus:ring-2 focus:ring-primary/60 transition-all duration-300 border-muted-foreground/20"
                                  placeholder="Your name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground/80 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block"></span>
                                Email
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="focus:ring-2 focus:ring-primary/60 transition-all duration-300 border-muted-foreground/20"
                                  placeholder="your.email@example.com"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    </div>
                    
                    {/* Service selection with enhanced styling */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80 flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block"></span>
                              Service Interested In
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="focus:ring-2 focus:ring-primary/60 transition-all duration-300 border-muted-foreground/20">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="portfolio-website">
                                  Portfolio Website
                                </SelectItem>
                                <SelectItem value="business-website">
                                  Business Website
                                </SelectItem>
                                <SelectItem value="chatbot">
                                  AI-powered Chatbot
                                </SelectItem>
                                <SelectItem value="lead-generation">
                                  Lead Generation
                                </SelectItem>
                                <SelectItem value="content-writing">
                                  Content Writing
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    {/* Message textarea with enhanced styling */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80 flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block"></span>
                              Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                className="focus:ring-2 focus:ring-primary/60 transition-all duration-300 min-h-[120px] border-muted-foreground/20"
                                placeholder="Tell me about your project..."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    {/* Submit buttons with enhanced styling */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex gap-3 pt-4"
                    >
                      <Button
                        type="submit"
                        variant="default"
                        className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-primary-foreground group"
                      >
                        Send Message
                        <motion.span 
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
                        >
                          →
                        </motion.span>
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between space-y-6"
          >
            <Card className="shadow-xl border border-border bg-card/80 dark:bg-card/60 backdrop-blur-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {/* Enhanced contact info items with animations */}
                  {[
                    { icon: Mail, text: "harsh910.dev@gmail.com", href: "mailto:harsh910.dev@gmail.com", isEmail: true },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center group p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 ${item.isEmail ? 'cursor-pointer' : ''}`}
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      {...(item.isEmail ? {
                        role: 'button',
                        tabIndex: 0,
                        onClick: () => window.open(item.href, '_blank'),
                        onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') window.open(item.href, '_blank'); }
                      } : {})}
                    >
                      <div className="p-2 rounded-full bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-primary transition-colors duration-300 font-medium"
                          {...(item.isEmail ? { tabIndex: -1 } : {})}
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="font-medium">{item.text}</span>
                      )}
                    </motion.div>
                  ))}
                </div>

                <Separator className="my-8" />

                <div>
                  <h4 className="text-lg font-medium mb-6 text-primary">
                    Connect With Me
                  </h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        href: "https://github.com",
                        icon: Github,
                        label: "GitHub",
                        color: "hover:bg-[#333]/20 dark:hover:bg-[#333]/30",
                      },
                      {
                        href: "https://linkedin.com",
                        icon: Linkedin,
                        label: "LinkedIn",
                        color: "hover:bg-[#0077B5]/20 dark:hover:bg-[#0077B5]/30",
                      },
                      {
                        href: "https://twitter.com",
                        icon: Twitter,
                        label: "Twitter",
                        color: "hover:bg-[#1DA1F2]/20 dark:hover:bg-[#1DA1F2]/30",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-muted/60 dark:bg-muted/30 rounded-full ${social.color} hover:scale-110 transition-all duration-300 group border border-border`}
                        aria-label={social.label}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <social.icon className="h-5 w-5 group-hover:text-primary transition-colors duration-300 text-foreground" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
