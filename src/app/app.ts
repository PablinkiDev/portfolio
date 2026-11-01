import { Component } from '@angular/core';
import { Navbar } from './core/navbar/navbar';
import { BackgroundGrid } from './core/background-grid/background-grid';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Experience } from './sections/experience/experience';
import { Stack } from './sections/stack/stack';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, BackgroundGrid, Hero, Projects, Experience, Stack, Contact],
  templateUrl: './app.html',
})
export class App {}