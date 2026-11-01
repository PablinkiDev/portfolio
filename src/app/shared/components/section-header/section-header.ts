import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.html',
})
export class SectionHeader {
  index = input.required<string>();  
  label = input.required<string>();  
  title = input.required<string>(); 
}