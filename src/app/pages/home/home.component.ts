import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/cartelera.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private _peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this._peliculasService.getCartelera().subscribe(data=> {
      this.movies = data.results;
    })
  }

}
