import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-section.component.html',
  styleUrl: './top-section.component.scss'
})
export class TopSectionComponent {

  title:string='Vratino Technologies';
  images: string[] = ['moon.jpg', 'cosmos.jpg', 'planets.jpg']; // Update with your actual image paths
  currentIndex = 0;

  @Input()
  slides: any[]=[];
  currentSlide = 0;

  // ngOnInit(): void {
  //   this.startSlideShow();
  // }

  startSlideShow() {
    setTimeout(() => {
      this.nextSlide();
      this.startSlideShow(); // Recursive call for the next slide
    }, 5000); // Change the interval (in milliseconds) as needed
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
