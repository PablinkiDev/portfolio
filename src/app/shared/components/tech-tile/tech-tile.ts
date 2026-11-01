import { Component, ElementRef, inject, input } from '@angular/core';
import { Tech } from '../../../models/tech.model';

@Component({
  selector: 'app-tech-tile',
  templateUrl: './tech-tile.html',
  styleUrl: './tech-tile.css',
  host: {
    '[style.--c]': 'tech().color',
    '[style.--i]': 'index()',
  },
})
export class TechTile {
  tech = input.required<Tech>();
  index = input(0);  

  private el = inject(ElementRef<HTMLElement>);

  burst() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const color = this.tech().color;

    for (let i = 0; i < 16; i++) {
      const p = document.createElement('span');
      p.className = 'tech-particle';
      p.style.cssText = `left:${cx}px; top:${cy}px; background:${i % 3 ? color : '#fda4af'}`;
      document.body.appendChild(p);

      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.random() * 60;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;

      p.animate(
        [
          { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
          { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${Math.random() * 360}deg) scale(0)`, opacity: 0 },
        ],
        { duration: 600 + Math.random() * 300, easing: 'cubic-bezier(.2,.8,.2,1)' },
      ).onfinish = () => p.remove();
    }
  }
}