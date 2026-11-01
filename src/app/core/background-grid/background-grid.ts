import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-background-grid',
  templateUrl: './background-grid.html',
  styleUrl: './background-grid.css',
  host: {
    '(window:pointermove)': 'onMove($event)',
    '(document:mouseleave)': 'visible.set(false)',
    '[style.--mx]': 'x() + "px"',
    '[style.--my]': 'y() + "px"',
    '[class.lit]': 'visible()',
  },
})
export class BackgroundGrid {
  x = signal(-999);
  y = signal(-999);
  visible = signal(false);

  private enabled =
    typeof window !== 'undefined' &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    window.matchMedia('(pointer: fine)').matches;

  onMove(e: PointerEvent) {
    if (!this.enabled) return;
    this.x.set(e.clientX);
    this.y.set(e.clientY);
    this.visible.set(true);
  }
}