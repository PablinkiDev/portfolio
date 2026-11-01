import { TerminalStep } from '../models/terminal.model';

export const HERO_TERMINAL: TerminalStep[] = [
  {
    command: 'whoami',
    output: 'Agustín Fernández — Desarrollador Full Stack',
  },
  {
    command: 'cat ahora.txt',
    output: 'Construyendo E-Stellarium y enseñando desarrollo web en WeAreSRV.',
  },
  {
    command: 'git status',
    output: 'On branch <span class="text-amber-200">disponible</span><br>Buscando: Full Stack / Frontend Jr.',
  },
  {
    command: 'ls proyectos/',
    output: '<span class="text-rose-300">kuaizi/  e-stellarium/  dev-clicker/</span>',
  },
];