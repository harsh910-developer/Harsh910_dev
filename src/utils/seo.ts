// SEO utility functions

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const updatePageSEO = (seoData: SEOData) => {
  // Update document title
  document.title = seoData.title;

  // Update meta description
  updateMetaTag("description", seoData.description);

  // Update keywords if provided
  if (seoData.keywords) {
    updateMetaTag("keywords", seoData.keywords);
  }

  // Update Open Graph tags
  updateMetaProperty("og:title", seoData.title);
  updateMetaProperty("og:description", seoData.description);

  if (seoData.image) {
    updateMetaProperty("og:image", seoData.image);
  }

  if (seoData.url) {
    updateMetaProperty("og:url", seoData.url);
    updateLinkTag("canonical", seoData.url);
  }

  if (seoData.type) {
    updateMetaProperty("og:type", seoData.type);
  }

  // Update Twitter Card tags
  updateMetaTag("twitter:title", seoData.title);
  updateMetaTag("twitter:description", seoData.description);

  if (seoData.image) {
    updateMetaTag("twitter:image", seoData.image);
  }
};

const updateMetaTag = (name: string, content: string) => {
  let element = document.querySelector(
    `meta[name="${name}"]`,
  ) as HTMLMetaElement;

  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }

  element.content = content;
};

const updateMetaProperty = (property: string, content: string) => {
  let element = document.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.content = content;
};

const updateLinkTag = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
};

// Page-specific SEO data
export const pageSEOData = {
  home: {
    title:
      "Harsh - Freelance Web Developer | Custom Websites, AI Chatbots & Content Writing",
    description:
      "Professional freelance web developer specializing in custom websites, AI-powered chatbots, and compelling content writing. Transform your digital presence with modern, responsive solutions.",
    keywords:
      "freelance web developer, custom websites, AI chatbots, content writing, portfolio websites, business websites, web design, Mumbai freelancer",
    type: "website",
  },
  about: {
    title:
      "About Harsh - Experienced Freelance Web Developer | 50+ Successful Projects",
    description:
      "Learn about Harsh, a skilled freelance web developer with 4+ years of experience. Discover my journey, values, and expertise in creating digital solutions that drive results.",
    keywords:
      "about harsh, freelance web developer experience, web development skills, digital solutions expert",
    type: "profile",
  },
  services: {
    title:
      "Web Development Services | Custom Websites, AI Chatbots & Content Writing",
    description:
      "Comprehensive web development services including custom portfolio websites, business websites, AI-powered chatbots, and professional content writing. Get a quote today!",
    keywords:
      "web development services, custom website development, AI chatbot development, content writing services, freelance web developer",
    type: "service",
  },
  portfolio: {
    title:
      "Portfolio - Web Development Projects | Websites, Chatbots & Content Examples",
    description:
      "Explore my portfolio of successful web development projects including custom websites, AI chatbots, and content writing samples. See why clients choose my services.",
    keywords:
      "web development portfolio, website examples, chatbot projects, content writing samples, freelance developer work",
    type: "website",
  },
  contact: {
    title: "Contact Harsh - Get Your Web Development Project Started Today",
    description:
      "Ready to transform your digital presence? Contact me for custom websites, AI chatbots, or content writing services. Free consultation and competitive pricing.",
    keywords:
      "contact web developer, hire freelance developer, web development consultation, get quote website development",
    type: "website",
  },
};
