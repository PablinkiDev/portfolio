import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.html',
})
export class ChipList {
  items = input.required<string[]>();
  small = input(false);
}