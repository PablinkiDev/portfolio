import { Component } from '@angular/core';
import { Terminal } from '../../shared/components/terminal/terminal';
import { HERO_TERMINAL } from '../../data/terminal.data';

@Component({
  selector: 'app-hero',
  imports: [Terminal],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  terminalSteps = HERO_TERMINAL;

  socials = [
    { label: 'GitHub', url: 'https://github.com/PablinkiDev' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/agust%C3%ADn-pablo-fernandez-44b758315' },
    { label: 'Email', url: 'mailto:agusdev.fernandez@gmail.com' },
  ];
}