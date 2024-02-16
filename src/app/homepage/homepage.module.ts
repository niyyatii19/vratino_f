import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSectionComponent } from './components/top-section/top-section.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, TopSectionComponent
  ],
  exports:[
    TopSectionComponent
  ]
})
export class HomepageModule { }
