import { Component, input, signal } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.html',
  styleUrl: './project-preview.css',
})
export class ProjectPreview {
  project = input.required<Project>();
  imageError = signal(false);
}