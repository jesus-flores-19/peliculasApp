import { Component, OnInit, Input} from '@angular/core';
import { Movie } from 'src/app/interface/cartelera.interface';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent implements OnInit {

  @Input() movies: Movie[] = []
  
  constructor() { 
  }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  onSwiper(swiper: any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

}
