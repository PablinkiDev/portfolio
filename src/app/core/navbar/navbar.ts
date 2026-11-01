import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  host: { '(document:keydown.escape)': 'open.set(false)' },
})
export class Navbar {
  open = signal(false);

  links = [
    { id: 'proyectos', label: 'proyectos' },
    { id: 'experiencia', label: 'experiencia' },
    { id: 'stack', label: 'stack' },
    { id: 'contacto', label: 'contacto' },
  ];
}