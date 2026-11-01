import { Component, DestroyRef, OnInit, inject, input, signal } from '@angular/core';
import { TerminalStep } from '../../../models/terminal.model';

interface Line {
  command: string;
  output: string;
  showOutput: boolean;
}

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.html',
  styleUrl: './terminal.css',
})
export class Terminal implements OnInit {
  title = input('~/agustin — zsh');
  steps = input.required<TerminalStep[]>();

  lines = signal<Line[]>([]);
  finished = signal(false);

  private alive = true;

  constructor() {
    inject(DestroyRef).onDestroy(() => (this.alive = false));
  }

  ngOnInit() {
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      this.lines.set(this.steps().map((s) => ({ ...s, showOutput: true })));
      this.finished.set(true);
      return;
    }

    this.loop();
  }

  private async loop() {
    while (this.alive) {
      this.lines.set([]);
      this.finished.set(false);

      for (const step of this.steps()) {
        if (!this.alive) return;

        this.lines.update((ls) => [...ls, { command: '', output: step.output, showOutput: false }]);
        await this.sleep(300);

        for (const char of step.command) {
          if (!this.alive) return;
          this.updateLast((l) => ({ ...l, command: l.command + char }));
          await this.sleep(40 + Math.random() * 50);
        }

        await this.sleep(250);
        this.updateLast((l) => ({ ...l, showOutput: true }));
        await this.sleep(700);
      }

      this.finished.set(true);
      await this.sleep(4500);
    }
  }

  private updateLast(fn: (line: Line) => Line) {
    this.lines.update((ls) => ls.map((l, i) => (i === ls.length - 1 ? fn(l) : l)));
  }

  private sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}