import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ImageSliderComponent } from '../../image-slider/image-slider.component';

@Component({
  selector: 'app-landing-screen',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ImageSliderComponent],
  templateUrl: './landing-screen.component.html',
  styleUrl: './landing-screen.component.scss',
})
export class LandingScreenComponent {
  slides: any[] = [
    {
      url: '/assets/images/image3.jpg',
      title: 'First slide',
      description: 'This is the first slide',
    },
    {
      url: '/assets/images/image5.jpg',
      title: 'Second slide',
      description: 'This is the second slide',
    },
    {
      url: '/assets/images/image4.jpg',
      title: 'Third slide',
      description: 'This is the third slide',
    }
  ];
}
