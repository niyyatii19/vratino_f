import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { TopbarComponent } from './ui-components/topbar/topbar.component';
import { AboutComponent } from './sections/about/about.component';
import { AdvisoryCommiteeComponent } from './sections/advisory-commitee/advisory-commitee.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { ProductsServicesComponent } from './sections/products-services/products-services.component';
import { LandingScreenComponent } from './sections/landing-screen/landing-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ImageSliderComponent,
    TopbarComponent,
    AboutComponent,
    AdvisoryCommiteeComponent,
    GalleryComponent,
    ProductsServicesComponent,
    LandingScreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vratino-f';

 
}
