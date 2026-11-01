import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'kuaizi',
    name: 'Kuaizi',
    tag: 'Mobile',
    meta: 'Proyecto final · UTN · 2026',
    subtitle: 'Sistema integral de gestión gastronómica',
    description:
      'Sistema integral de gestión para restaurantes que digitaliza y optimiza la experiencia gastronómica, desde la asignación de mesas y la toma de pedidos hasta su preparación, entrega y pago. Integra múltiples roles, comunicación en tiempo real y herramientas para mejorar la atención al cliente y la organización del establecimiento.',
    stack: ['Angular', 'Ionic', 'TypeScript', 'Supabase', 'PostgreSQL'],
    color: '#fb923c',
    mockup: 'video',
    image: 'projects/kuaizi.png',
    videoUrl: 'https://www.youtube.com/watch?v=rELeutu6OD0',
    links: [
      { label: '▶ Ver video demo', url: 'https://www.youtube.com/watch?v=rELeutu6OD0' },
    ],
    featured: true,
  },
  {
    id: 'e-stellarium',
    name: 'E-Stellarium',
    tag: 'Web app',
    meta: 'WeAreSRV · En desarrollo',
    subtitle: 'Plataforma de aprendizaje interactivo',
    description:
      'Plataforma educativa que transforma el aprendizaje de programación en una experiencia interactiva y gamificada. Combina desafíos, minijuegos, constelaciones, rachas y sistemas de recompensas para fomentar la práctica constante y reforzar los conocimientos adquiridos.',
    stack: ['Node.js', 'API REST', 'PostgreSQL', 'RBAC'],
    color: '#a78bfa',
    mockup: 'browser',
    image: 'projects/e-stellarium.png',
    url: 'e-stellarium.wearesrv.com',
    links: [
      { label: 'Visitar sitio ↗', url: 'https://e-stellarium.wearesrv.com/' },
    ],
  },
  {
    id: 'dev-clicker',
    name: 'Dev Clicker',
    tag: 'Juego',
    meta: 'Juego web · 2026',
    subtitle: 'Juego incremental de simulación',
    description:
      'Videojuego incremental de simulación empresarial donde comenzás como desarrollador independiente y construís tu propia empresa de software. Incluye contratos, empleados, tecnologías, mejoras y sistemas de progresión.',
    stack: ['React', 'TypeScript', 'Vercel'],
    color: '#34d399',
    mockup: 'browser',
    image: 'projects/dev-clicker.png',
    url: 'dev-clicker.wearesrv.com',
    links: [
      { label: 'Jugar ahora ↗', url: 'https://dev-clicker.wearesrv.com/' },
    ],
  },
];