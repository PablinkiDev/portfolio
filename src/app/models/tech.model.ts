export interface Tech {
  name: string;
  icon: string;    
  color: string;    
  invert?: boolean; 
}

export interface TechGroup {
  title: string;
  items: Tech[];
}