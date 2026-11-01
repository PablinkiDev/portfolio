import { Experience } from '../models/experience.model';

export const WORK: Experience[] = [
  {
    period: '2026 — Actualidad',
    title: 'Desarrollador Web e Instructor de Programación',
    place: 'WeAreSRV',
    status: 'current',
    highlights: [
      'Desarrollo y mejora del sitio web del emprendimiento.',
      'Desarrollo de E-Stellarium, plataforma interactiva de programación.',
      'Dictado de cursos intensivos Full Stack.',
    ],
  },
];

export const EDUCATION: Experience[] = [
  {
    period: '2024 — 2026',
    title: 'Tecnicatura Universitaria en Programación',
    place: 'UTN · FRA',
    status: 'done',
    description: 'Estudios finalizados, título en trámite.',
  },
  {
    period: '2027',
    title: 'Licenciatura en Ciencia de Datos',
    place: 'UNICABA · Inicio previsto',
    status: 'upcoming',
  },
];