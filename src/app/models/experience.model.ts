export type ExperienceStatus = 'current' | 'done' | 'upcoming';

export interface Experience {
  period: string;
  title: string;
  place: string;
  status: ExperienceStatus;
  description?: string;
  highlights?: string[];
}