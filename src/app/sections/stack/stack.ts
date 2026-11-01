import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { TechTile } from '../../shared/components/tech-tile/tech-tile';
import { Reveal } from '../../shared/directives/reveal';
import { STACK } from '../../data/stack.data';

@Component({
  selector: 'app-stack',
  imports: [SectionHeader, TechTile, Reveal],
  templateUrl: './stack.html',
  styleUrl: './stack.css',
})
export class Stack {
  groups = STACK;
}