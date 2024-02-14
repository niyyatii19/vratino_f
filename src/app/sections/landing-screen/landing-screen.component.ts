import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-screen',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './landing-screen.component.html',
  styleUrl: './landing-screen.component.scss',
})
export class LandingScreenComponent {}
