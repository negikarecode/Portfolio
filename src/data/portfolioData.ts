import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "ARYAN NEGI",
    firstName: "Aryan",
    lastName: "Negi",
    title: "Full Stack Developer",
    positioning: "Building responsive web applications and storefronts with React, Django, and Shopify.",
    availability: "Open to roles & technical projects",
    location: "New Delhi, India",
    email: "aryannegiofficial@gmail.com",
    phone: "+91-7011110627",
    phoneDisplay: "+91 70111 10627",
    social: {
      github: "https://github.com/negikarecode",
      githubDisplay: "github.com/negikarecode",
      linkedin: "https://www.linkedin.com/in/aryannegi29/",
      linkedinDisplay: "linkedin.com/in/aryannegi29",
    },
    bio: {
      headline: "I'm a full stack developer who gets a little too excited about making complicated things feel simple.",
      short: "I care deeply about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone's day easier.",
      paragraphs: [
        "Based in New Delhi, I'm a Computer Science student at Delhi University building full stack apps with React and Django and customizing Shopify storefronts.",
        "From developing Shopify storefronts using Liquid, HTML, CSS, and JavaScript to building web apps with React, Python, and Django, I focus on clean code and reliable user experiences.",
        "Certified as an IBM Full Stack Software Developer, I've worked across internships at Open Limits and Klynt Solutions focusing on responsive design, performance, and component structure."
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
      description: "Built and customized Shopify e-commerce stores, developed responsive theme components, and resolved front-end issues to improve store performance.",
      bullets: [
        "Built and customized Shopify storefronts using Liquid, HTML, CSS, and JavaScript, creating modular theme components and fluid product pages.",
        "Identified and resolved cross-browser rendering bugs and responsive layout inconsistencies across mobile, tablet, and desktop viewports.",
        "Optimized asset loading sequences and theme scripts to improve store page load speeds and streamline the mobile checkout experience."
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
        "Developed responsive web interfaces from design mockups utilizing semantic HTML5, modern CSS layouts (Flexbox/Grid), and vanilla JavaScript.",
        "Implemented DOM manipulation scripts for interactive UI components, dynamic modals, and responsive navigation menus.",
        "Conducted cross-device responsive testing to maintain visual layout integrity and clean rendering across targeted screen sizes."
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
      subtitle: "Diagnostic & Mock Test Platform for CUET UG Aspirants",
      role: "Full Stack Developer",
      period: "2025",
      goal: "Build a preparation platform offering full-length mock tests, chapter-wise practice tests, previous year question archives, and a 150-question diagnostic cycle to identify learning gaps.",
      solution: "Developed the testing engine and performance analytics using React, Django REST framework, and MySQL to deliver structured mock exams and improvement insights.",
      bullets: [
        "Developed the full-stack test engine supporting chapter-wise practice modules, timed mock examinations, and indexed previous year questions (PYQs).",
        "Integrated a 150-question diagnostic cycle system to identify subject weaknesses and generate personalized improvement insights.",
        "Constructed a relational MySQL database schema integrated with Django REST API endpoints for secure, low-latency question retrieval and review."
      ],
      techStack: ["React", "Python", "Django", "MySQL", "Tailwind CSS", "REST APIs"],
      links: {
        demo: "https://cuetmate.vercel.app/",
      },
      screenshots: [
        {
          src: "/projects/cuetmate-1.png",
          alt: "CUETMate landing page with exam preparation headline, features, and CBT simulator preview",
          caption: "Landing page with interactive computer-based test simulator preview",
          width: 1638,
          height: 935,
        },
        {
          src: "/projects/cuetmate-2.png",
          alt: "CUETMate student dashboard showing diagnostic test banner, performance graph, and priority study topics",
          caption: "Student dashboard showing diagnostic test status, score trend chart, and priority topics to fix",
          width: 1636,
          height: 930,
        },
      ],
    },
    {
      id: "urban-essentials",
      title: "Urban Essentials",
      tag: "PROJECT #02",
      subtitle: "Shopify Storefront Customization & Merchandising",
      role: "Web Developer",
      period: "2025",
      isShopifyStore: true,
      goal: "Customize a Shopify storefront with responsive layouts, optimized product pages, and intuitive navigation.",
      solution: "Built custom theme templates using Liquid, HTML, CSS, and JavaScript, refining product pages and storefront usability.",
      bullets: [
        "Built custom Shopify storefront sections using Liquid, HTML, CSS, and JavaScript, creating modular theme templates for flexible merchandising.",
        "Customized product detail pages with instant variant pickers, dynamic stock indicators, and a sticky mobile add-to-cart tray.",
        "Refactored theme stylesheets to eliminate responsive layout inconsistencies and streamline the mobile checkout experience."
      ],
      techStack: ["Shopify Liquid", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Mobile UX"],
      links: {
        demo: "https://urbanessentialsindia.com/",
      },
      screenshots: [
        {
          src: "/projects/urban-essentials-2.webp",
          alt: "Urban Essentials homepage showing routine collection hero banner, product value badges, and featured carry collection",
          caption: "Storefront homepage with hero collection banner, feature badges, and featured backpack",
          width: 1600,
          height: 912,
        },
        {
          src: "/projects/urban-essentials-1.webp",
          alt: "Urban Essentials product page displaying stainless steel tiffin box, color variant options, price, and add to bag buttons",
          caption: "Product page with color variant selector, stock status, and add-to-bag actions",
          width: 1600,
          height: 910,
        },
      ],
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
      details: "Coursework in data structures, algorithms, database systems, and software engineering.",
    },
    {
      school: "The Srijan School",
      degree: "Senior Secondary Education",
      period: "Completed 2025",
      location: "New Delhi, India",
      details: "",
    },
  ],

  certifications: [
    {
      title: "IBM Full Stack Software Developer",
      issuer: "IBM",
      year: "2025",
      certificatePdfUrl: "/certs/ibm-full-stack-certificate.pdf",
      topicsCovered: [
        "Front-End Development with React",
        "Back-End Services & Architecture",
        "Relational Database Integration",
        "Application Security & DevOps Foundations"
      ],
    },
  ],
};
