import { TechGroup } from '../models/tech.model';

export const STACK: TechGroup[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'Angular', icon: 'angular/angular-original', color: '#dd0031' },
      { name: 'React', icon: 'react/react-original', color: '#61dafb' },
      { name: 'Ionic', icon: 'ionic/ionic-original', color: '#3880ff' },
      { name: 'TypeScript', icon: 'typescript/typescript-original', color: '#3178c6' },
      { name: 'JavaScript', icon: 'javascript/javascript-original', color: '#f7df1e' },
      { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original', color: '#38bdf8' },
      { name: 'HTML5', icon: 'html5/html5-original', color: '#e34f26' },
      { name: 'CSS3', icon: 'css3/css3-original', color: '#1572b6' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'nodejs/nodejs-original', color: '#5fa04e' },
      { name: 'Express', icon: 'express/express-original', color: '#e5e7eb', invert: true },
      { name: 'NestJS', icon: 'nestjs/nestjs-original', color: '#e0234e' },
    ],
  },
  {
    title: 'Bases de datos',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original', color: '#4169e1' },
      { name: 'MySQL', icon: 'mysql/mysql-original', color: '#00a1c2' },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original', color: '#47a248' },
      { name: 'Supabase', icon: 'supabase/supabase-original', color: '#3ecf8e' },
    ],
  },
  {
    title: 'Tooling',
    items: [
      { name: 'Git', icon: 'git/git-original', color: '#f05032' },
      { name: 'GitHub', icon: 'github/github-original', color: '#e5e7eb', invert: true },
      { name: 'Vitest', icon: 'vitest/vitest-original', color: '#fcc72b' },
      { name: 'Vercel', icon: 'vercel/vercel-original', color: '#e5e7eb', invert: true },
      { name: 'Netlify', icon: 'netlify/netlify-original', color: '#00c7b7' },
    ],
  },
];