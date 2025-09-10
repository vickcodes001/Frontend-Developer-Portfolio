// Project related types
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

// Skill related types
export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Navigation types
export interface NavigationItem {
  href: string;
  label: string;
}

// Social link types
export interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

// Generic component props
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Scroll function type
export type ScrollToElementFunction = (elementId: string) => void;