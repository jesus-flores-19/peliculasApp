import { Component, OnInit, Input} from '@angular/core';
import { Movie } from 'src/app/interface/cartelera.interface';

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
    console.log(this.movies);
  }

}
