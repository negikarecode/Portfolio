export interface MetricItem {
  label: string;
  value: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  subtitle: string;
  role: string;
  period: string;
  summary: string;
  problem: string;
  solution: string;
  bullets: string[];
  impact: MetricItem[];
  techStack: string[];
  links: {
    live?: string;
    github?: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  bullets: string[];
  techStack: string[];
  badgeColor: 'yellow' | 'mint' | 'pink' | 'sky';
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
  skillsVerified: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; tagColor: 'yellow' | 'mint' | 'pink' | 'sky' | 'lavender' }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    positioning: string;
    availability: string;
    location: string;
    email: string;
    social: {
      github: string;
      githubDisplay: string;
      linkedin: string;
      linkedinDisplay: string;
    };
    bio: {
      headline: string;
      short: string;
      paragraphs: string[];
    };
    resumePdfUrl: string;
  };
  experiences: ExperienceItem[];
  projects: Project[];
  skills: SkillCategory[];
  education: EducationItem[];
  certifications: CertificationItem[];
}
