import { Component, input } from '@angular/core';
import { Project } from '../../../models/project.model';
import { ProjectPreview } from '../project-preview/project-preview';
import { ChipList } from '../chip-list/chip-list';

@Component({
  selector: 'app-featured-project',
  imports: [ProjectPreview, ChipList],
  templateUrl: './featured-project.html',
  styleUrl: './featured-project.css',
})
export class FeaturedProject {
  project = input.required<Project>();
}