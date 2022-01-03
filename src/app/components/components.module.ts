import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ]
})
export class ComponentsModule { }
