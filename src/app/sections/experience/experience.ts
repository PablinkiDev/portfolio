import { Component } from '@angular/core';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { Timeline } from '../../shared/components/timeline/timeline';
import { WORK, EDUCATION } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  imports: [SectionHeader, Timeline],
  templateUrl: './experience.html',
})
export class Experience {
  work = WORK;
  education = EDUCATION;
}