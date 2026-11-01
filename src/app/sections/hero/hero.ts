import { Component } from '@angular/core';
import { Terminal } from '../../shared/components/terminal/terminal';
import { HERO_TERMINAL } from '../../data/terminal.data';
import { SOCIALS } from '../../data/socials.data';

@Component({
  selector: 'app-hero',
  imports: [Terminal],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  terminalSteps = HERO_TERMINAL;
  socials = SOCIALS;
}