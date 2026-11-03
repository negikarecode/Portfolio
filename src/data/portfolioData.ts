import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "ARYAN NEGI",
    firstName: "Aryan",
    lastName: "Negi",
    title: "Full Stack Developer",
    positioning: "I build responsive, high-performance web products that get out of your way.",
    availability: "Open to new opportunities & good problems",
    location: "Burari, New Delhi, India",
    phone: "+91-7011110627",
    email: "aryannegiofficial@gmail.com",
    social: {
      github: "https://github.com/aryan-negi", // [CONFIRM GITHUB URL: update to your profile]
      githubDisplay: "github.com/aryan-negi",
      linkedin: "https://linkedin.com/in/aryan-negi", // [CONFIRM LINKEDIN URL: update to your profile]
      linkedinDisplay: "linkedin.com/in/aryan-negi",
    },
    bio: {
      headline: "I'm a full stack developer who gets a little too excited about making complicated things feel simple.",
      short: "I care deeply about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone's day easier.",
      paragraphs: [
        "Based in Burari, New Delhi, I am currently pursuing a Bachelor of Computer Science at Delhi University. My journey combines deep curiosity with pragmatic engineering — bridging intuitive front-end design with robust back-end systems.",
        "From customizing high-conversion Shopify storefronts with Liquid, HTML, CSS, and modern JavaScript, to engineering full-stack platforms with React, Python, and Django, I enjoy turning messy technical requirements into crisp, responsive user experiences.",
        "Certified as an IBM Full Stack Software Developer, I've delivered production client solutions through internships at Open Limits and Klynt Solutions, prioritizing performance, semantic accessibility, and clean component architecture."
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
      description: "Engineered and customized Shopify storefronts, built responsive theme components, and resolved critical front-end bottlenecks to elevate store performance.",
      bullets: [
        "Architected and customized Shopify e-commerce stores using Liquid, HTML, CSS, and modern JavaScript, crafting fluid product pages and custom theme sections.",
        "Resolved complex UI bugs, responsive layout discrepancies, and cross-browser rendering flaws across mobile, tablet, and desktop viewports.",
        "Optimized asset loading sequences and theme scripts, improving page load speeds by [ADD METRIC: e.g. 35%] and bolstering mobile checkout conversion.",
        "Collaborated with brand stakeholders to rapidly prototype and test new promotional components and navigation flows."
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
        "Engineered static and dynamic web pages from design mockups utilizing semantic HTML5, CSS Flexbox/Grid, and vanilla JavaScript.",
        "Implemented DOM manipulation scripts for interactive components, modal dialogues, and responsive navigation menus.",
        "Conducted cross-device responsive audits, ensuring 100% visual parity and zero layout shifts across targeted screen sizes.",
        "Streamlined front-end asset pipelines, helping achieve Lighthouse performance scores of [ADD METRIC: e.g. 90+]."
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
      problem: "Students preparing for CUET UG struggled with generic mock tests that failed to identify specific conceptual weaknesses, resulting in wasted study hours on topics they had already mastered.",
      solution: "Engineered an intelligent preparation platform featuring timed mock exams, previous year question banks, and a proprietary 150-question diagnostic cycle that pinpoints exact subject vulnerabilities with tailored study recommendations.",
      bullets: [
        "Architected the full-stack test engine supporting chapter-wise practice, timed full-length simulations, and indexed PYQs.",
        "Integrated an AI-powered diagnostic engine analyzing a 150-question assessment cycle to classify conceptual weaknesses and deliver personalized improvement insights.",
        "Engineered an interactive student dashboard with instant answer explanations, accuracy curves, and performance benchmarking for [ADD METRIC: e.g. 1,000+] test sessions.",
        "Constructed a secure, relational database schema in MySQL connected via Django REST endpoints to ensure sub-100ms question retrieval."
      ],
      impact: [
        { label: "Diagnostic Cycle", value: "150-Q", description: "Structured cycle pinpointing individual subject weak points" },
        { label: "Analytics Engine", value: "AI-Powered", description: "Personalized improvement insights per student test run" },
        { label: "Platform Scope", value: "Full-Length", description: "Complete mock tests, chapter-wise practice, & verified PYQs" },
      ],
      techStack: ["React", "Python", "Django", "MySQL", "Tailwind CSS", "RESTful APIs", "AI Analytics"],
      links: {
        live: "https://cuetmate.vercel.app", // [ADD CUETMATE DEMO LINK]
        github: "https://github.com/aryan-negi/cuetmate", // [ADD CUETMATE REPO LINK]
      },
      isPlaceholderLink: true,
    },
    {
      id: "urban-essentials",
      title: "Urban Essentials",
      tag: "PROJECT #02",
      subtitle: "High-Converting Shopify Storefront & Brand Experience",
      role: "Front-End & Shopify Developer",
      period: "2025",
      summary: "Customized a modern Shopify e-commerce storefront with responsive layouts, optimized product pages, and intuitive mobile navigation.",
      problem: "The merchant faced high cart abandonment and sluggish mobile page speeds due to bloated theme templates, non-standard layout breaks, and cumbersome product filtering.",
      solution: "Overhauled the storefront architecture using Shopify Liquid and modular CSS, engineering streamlined sticky buy flows, responsive product matrices, and rapid filter menus.",
      bullets: [
        "Customized Shopify storefront architecture with modular Liquid templates, allowing flexible content scheduling and responsive layout tuning.",
        "Redesigned the product detail page with instant variant selectors, dynamic stock indicators, and a sticky one-tap add-to-cart tray.",
        "Optimized mobile navigation and checkout friction, resulting in an estimated [ADD METRIC: e.g. 25%] drop in mobile abandonment.",
        "Refactored stylesheets with utility-first responsive practices, improving mobile accessibility and achieving zero layout shifts."
      ],
      impact: [
        { label: "Mobile Usability", value: "100%", description: "Fully responsive touch-optimized layout across all screens" },
        { label: "Checkout Journey", value: "Streamlined", description: "Sticky buy flow reducing drop-off [ADD METRIC: -25%]" },
        { label: "Architecture", value: "Modular", description: "Custom Liquid theme sections for rapid merchandising" },
      ],
      techStack: ["Shopify Liquid", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Mobile UX"],
      links: {
        live: "https://urban-essentials-demo.myshopify.com", // [ADD URBAN ESSENTIALS DEMO LINK]
        github: "https://github.com/aryan-negi/urban-essentials-theme", // [ADD URBAN ESSENTIALS REPO LINK]
      },
      isPlaceholderLink: true,
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
        { name: "UI/UX Architecture", tagColor: "yellow" },
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
      details: "Pursuing in-depth coursework covering algorithms, data structures, computer systems, database design, and software engineering principles.",
    },
    {
      school: "The Srijan School",
      degree: "Senior Secondary Education",
      period: "2013 – 2025",
      location: "New Delhi, India",
      details: "Completed senior secondary schooling with strong focus on science, mathematics, and computer science foundations.",
    },
  ],

  certifications: [
    {
      title: "IBM Full Stack Software Developer",
      issuer: "IBM",
      year: "2025",
      skillsVerified: [
        "Front-End Web Development with React",
        "Back-End Services & Cloud Native Architecture",
        "Database Design & Integration",
        "Application Security & DevOps Foundations"
      ],
    },
  ],
};
