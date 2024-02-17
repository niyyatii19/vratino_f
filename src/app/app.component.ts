import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ImageSliderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vratino-f';

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
