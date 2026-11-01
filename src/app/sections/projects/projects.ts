import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { FeaturedProject } from '../../shared/components/featured-project/featured-project';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [SectionHeader, FeaturedProject, ProjectCard],
  templateUrl: './projects.html',
})
export class Projects {
  featured = PROJECTS.find((p) => p.featured);
  others = PROJECTS.filter((p) => !p.featured);
}