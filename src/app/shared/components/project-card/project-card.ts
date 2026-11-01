import { Component, input } from '@angular/core';
import { Project } from '../../../models/project.model';
import { ProjectPreview } from '../project-preview/project-preview';
import { ChipList } from '../chip-list/chip-list';

@Component({
  selector: 'app-project-card',
  imports: [ProjectPreview, ChipList],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  project = input.required<Project>();
}