import { Component, OnInit, Input, AfterViewInit} from '@angular/core';
import { Cast } from 'src/app/interface/credits.interface';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {
  
  @Input() cast: Cast[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.cast);
  }

  ngAfterViewInit(): void {
    
  }

  onSwiper(swiper: any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

}
