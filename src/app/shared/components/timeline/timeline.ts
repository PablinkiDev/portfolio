import { Component, input } from '@angular/core';
import { Experience } from '../../../models/experience.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  title = input.required<string>();
  items = input.required<Experience[]>();
  highlight = input(false); 
}