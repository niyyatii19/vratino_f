import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { log } from 'console';

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss'
})
export class TopHeaderComponent {
  title: string = 'Vratino Technologies';

  @Input() slides: any[] = [];
  @Input() indicatorsVisible = true;
  @Input() animationSpeed = 500;
  @Input() autoPlay = true;
  @Input() autoPlaySpeed = 3000;
  currentSlide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(this.currentSlide);
  }
  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide(this.currentSlide)
  }
  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);

  }

  ngOnInit() {
    console.log("ng oninit triggered");
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
        console.log("next auto play ")
      }, this.autoPlaySpeed);
    }
  }
}
