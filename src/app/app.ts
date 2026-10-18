import { Component } from '@angular/core';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: '<app-home />',
  styles: [`:host{display:block;min-height:100dvh}`],
})
export class App {}
