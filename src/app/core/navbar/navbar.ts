import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  links = [
    { id: 'proyectos', label: 'proyectos' },
    { id: 'experiencia', label: 'experiencia' },
    { id: 'stack', label: 'stack' },
    { id: 'contacto', label: 'contacto' },
  ];
}