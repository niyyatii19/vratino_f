import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomepageModule } from './homepage/homepage.module';
import { TopSectionComponent } from './homepage/components/top-section/top-section.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, TopHeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vratino_f';

  slides: any[] = [
    {url: '/assets/images/moon.jpg',
    title: 'Moon'}, 
    {url: '/assets/images/cosmos.jpg',
    title: 'cosmos'},
    {url:'/assets/images/planets.jpg',
    title: 'planets'}
  ];
  


}
