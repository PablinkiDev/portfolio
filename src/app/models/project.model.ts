export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  tag: string;  
  meta: string; 
  subtitle: string;
  description: string;
  stack: string[];
  color: string;
  mockup: 'browser' | 'video';  
  image?: string;          
  videoUrl?: string;          
  url?: string;                 
  links: ProjectLink[];
  featured?: boolean;          
}