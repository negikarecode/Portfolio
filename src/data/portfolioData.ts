import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "ARYAN NEGI",
    firstName: "Aryan",
    lastName: "Negi",
    title: "Full Stack Developer",
    positioning: "I build responsive, high-performance web products that get out of your way.",
    availability: "Open to roles & technical projects",
    location: "New Delhi, India",
    email: "aryannegiofficial@gmail.com",
    social: {
      github: "https://github.com/aryan-negi",
      githubDisplay: "github.com/aryan-negi",
      linkedin: "https://linkedin.com/in/aryan-negi",
      linkedinDisplay: "linkedin.com/in/aryan-negi",
    },
    bio: {
      headline: "I'm a full stack developer who gets a little too excited about making complicated things feel simple.",
      short: "I care deeply about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone's day easier.",
      paragraphs: [
        "Based in New Delhi, India, I am pursuing a Bachelor of Computer Science at Delhi University. My approach combines pragmatic engineering with thoughtful interaction design — bridging clean front-end interfaces with reliable backend services.",
        "From customizing production Shopify storefronts using Liquid, HTML, CSS, and modern JavaScript to engineering full-stack platforms with React, Python, and Django, I focus on turning complex user workflows into fast, responsive digital experiences.",
        "Certified as an IBM Full Stack Software Developer, I've contributed to client deliverables through software internships at Open Limits and Klynt Solutions, prioritizing performance, semantic accessibility, and modular component architecture."
      ],
    },
    resumePdfUrl: "/Aryan_Negi_Resume.pdf",
  },

  experiences: [
    {
      company: "Open Limits",
      role: "Web Developer (Intern)",
      period: "2025–26",
      duration: "6 Months",
      location: "New Delhi / Remote",
      description: "Built and customized Shopify e-commerce stores, developed responsive theme components, and resolved critical front-end bottlenecks to elevate store performance.",
      bullets: [
        "Architected and customized Shopify storefronts using Liquid, HTML, CSS, and JavaScript, creating modular theme components and fluid product pages.",
        "Identified and resolved cross-browser rendering bugs and responsive layout inconsistencies across mobile, tablet, and desktop viewports.",
        "Optimized asset loading sequences and theme scripts to improve store page load speeds and streamline the mobile checkout experience.",
        "Collaborated with brand stakeholders to rapidly prototype and launch new promotional sections and intuitive navigation flows."
      ],
      techStack: ["Shopify Liquid", "HTML5", "CSS3", "JavaScript", "Responsive Design", "Theme Optimization"],
      badgeColor: "mint",
    },
    {
      company: "Klynt Solutions",
      role: "Web Developer (Intern)",
      period: "2025",
      duration: "3 Months",
      location: "New Delhi / Remote",
      description: "Developed static and interactive client web pages focusing on layout integrity, mobile responsiveness, and vanilla DOM manipulation.",
      bullets: [
        "Engineered responsive web interfaces from design mockups utilizing semantic HTML5, modern CSS layouts (Flexbox/Grid), and vanilla JavaScript.",
        "Implemented DOM manipulation scripts for interactive UI components, dynamic modals, and responsive navigation menus.",
        "Conducted cross-device responsive audits, ensuring visual layout consistency and robust mobile performance across targeted screen sizes.",
        "Streamlined front-end code structure and asset delivery to enhance overall page responsiveness and rendering performance."
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "Responsive Layouts"],
      badgeColor: "yellow",
    },
  ],

  projects: [
    {
      id: "cuetmate",
      title: "CUETMate",
      tag: "PROJECT #01",
      subtitle: "AI-Powered Diagnostic & Mock Test Platform for CUET UG Aspirants",
      role: "Lead Full Stack Developer",
      period: "2025",
      summary: "Developed a comprehensive CUET UG exam preparation platform offering full-length mock tests, PYQs, and chapter-wise practice tests with integrated AI performance analytics.",
      problem: "Students preparing for CUET UG struggled with generic mock exams that failed to pinpoint subject-level conceptual weaknesses, causing inefficient study cycles.",
      solution: "Engineered an intelligent preparation platform featuring timed mock exams, previous year question banks, and a proprietary 150-question diagnostic cycle that identifies learning gaps and provides personalized study recommendations.",
      bullets: [
        "Architected the full-stack testing engine supporting chapter-wise practice, timed full-length simulations, and indexed previous year questions (PYQs).",
        "Integrated an AI-powered diagnostic engine analyzing a 150-question assessment cycle to classify subject weaknesses and generate targeted improvement insights.",
        "Designed an interactive student review dashboard with detailed answer explanations, accuracy curves, and topic-wise performance breakdowns.",
        "Constructed a relational MySQL database schema integrated with Django REST API endpoints for secure, low-latency question retrieval."
      ],
      impact: [
        { label: "Diagnostic Engine", value: "150-Q Cycle", description: "Structured diagnostic cycle identifying topic-level weaknesses" },
        { label: "Assessment Scope", value: "Full-Length & PYQs", description: "Timed mock exams, previous year papers, and chapter tests" },
        { label: "Platform Stack", value: "Full-Stack", description: "React front-end paired with Django REST framework and MySQL" },
      ],
      techStack: ["React", "Python", "Django", "MySQL", "Tailwind CSS", "RESTful APIs", "AI Analytics"],
      links: {
        // Unconfirmed demo/code links omitted to avoid dead buttons; add to checklist
      },
    },
    {
      id: "urban-essentials",
      title: "Urban Essentials",
      tag: "PROJECT #02",
      subtitle: "Shopify Storefront Customization & Brand Experience",
      role: "Front-End & Shopify Developer",
      period: "2025",
      summary: "Customized a modern Shopify e-commerce storefront with responsive layouts, optimized product pages, and intuitive mobile navigation.",
      problem: "The merchant experienced mobile user drop-offs due to cumbersome product option navigation, non-standard layout breaks, and complex checkout steps.",
      solution: "Customized storefront templates using Liquid and modular CSS, engineering sticky buy flows, responsive product matrices, and dynamic variant selectors optimized for touch navigation.",
      bullets: [
        "Customized Shopify storefront architecture with modular Liquid templates, allowing flexible section reordering and content merchandising.",
        "Redesigned product detail pages with instant variant pickers, dynamic stock indicators, and a sticky mobile add-to-cart tray.",
        "Optimized mobile navigation paths and checkout layout to streamline the purchasing flow for mobile shoppers.",
        "Refactored theme stylesheets with responsive, utility-first CSS practices to improve mobile accessibility and layout stability."
      ],
      impact: [
        { label: "Theme Architecture", value: "Shopify Liquid", description: "Modular custom theme sections allowing flexible content merchandising" },
        { label: "Product Detail UX", value: "Variant Selectors", description: "Dynamic variant pickers with instant price and stock display" },
        { label: "Checkout Journey", value: "Sticky Buy Tray", description: "Mobile-first add-to-cart tray designed for one-thumb browsing" },
      ],
      techStack: ["Shopify Liquid", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Mobile UX"],
      links: {
        // Unconfirmed demo/code links omitted to avoid dead buttons; add to checklist
      },
    },
  ],

  skills: [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "React", tagColor: "yellow" },
        { name: "JavaScript (ES6+)", tagColor: "yellow" },
        { name: "Python", tagColor: "mint" },
        { name: "Django", tagColor: "mint" },
        { name: "Shopify Liquid", tagColor: "pink" },
        { name: "HTML5 & CSS3", tagColor: "pink" },
        { name: "Tailwind CSS", tagColor: "sky" },
        { name: "SQL / MySQL", tagColor: "sky" },
      ],
    },
    {
      title: "Tools & Methodologies",
      skills: [
        { name: "Git & GitHub", tagColor: "yellow" },
        { name: "Problem Solving", tagColor: "mint" },
        { name: "Responsive Web Design", tagColor: "pink" },
        { name: "DOM Manipulation", tagColor: "sky" },
        { name: "RESTful APIs", tagColor: "lavender" },
        { name: "UI Architecture", tagColor: "yellow" },
        { name: "Performance Optimization", tagColor: "mint" },
        { name: "Cross-Browser Testing", tagColor: "sky" },
      ],
    },
  ],

  education: [
    {
      school: "Delhi University",
      degree: "Bachelor of Computer Science",
      period: "2025 – Present",
      location: "New Delhi, India",
      details: "Pursuing coursework in algorithms, data structures, computer systems, database design, and software engineering principles.",
    },
    {
      school: "The Srijan School",
      degree: "Senior Secondary Education",
      period: "Completed 2025",
      location: "New Delhi, India",
      details: "Completed senior secondary education with strong foundational studies in science, mathematics, and computer applications.",
    },
  ],

  certifications: [
    {
      title: "IBM Full Stack Software Developer",
      issuer: "IBM",
      year: "2025",
      skillsVerified: [
        "Front-End Web Development with React",
        "Back-End Services & Cloud Architecture",
        "Relational Database Integration",
        "Application Security & DevOps Foundations"
      ],
    },
  ],
};
