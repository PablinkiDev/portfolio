import { Directive, DestroyRef, ElementRef, OnInit, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  host: { '[class.revealed]': 'visible()' },
})
export class Reveal implements OnInit {
  threshold = input(0.2, { alias: 'appRevealThreshold' });  

  visible = signal(false);

  private el = inject(ElementRef<HTMLElement>);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      this.visible.set(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.visible.set(true);
          observer.disconnect();  
        }
      },
      { threshold: this.threshold() },
    );

    observer.observe(this.el.nativeElement);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}