import { Component, signal } from '@angular/core';
import { EMAIL, SOCIALS } from '../../data/socials.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  email = EMAIL;
  socials = SOCIALS.filter((s) => s.label !== 'Email'); 
  year = new Date().getFullYear();

  copied = signal(false);
  private timer?: ReturnType<typeof setTimeout>;

  async copyEmail() {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copied.set(true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.copied.set(false), 2000);
    } catch {
      window.location.href = `mailto:${this.email}`;
    }
  }
}