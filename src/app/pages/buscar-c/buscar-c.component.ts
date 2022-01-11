import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interface/cartelera.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar-c',
  templateUrl: './buscar-c.component.html',
  styleUrls: ['./buscar-c.component.css']
})
export class BuscarCComponent implements OnInit {

  textoPelicula: string;
  movies: Movie[] = [];

  constructor(public activateRoute: ActivatedRoute, private _pelicuasService: PeliculasService) {}

  buscarPelicula(){
    this._pelicuasService.buscarPeliculas(this.textoPelicula).subscribe((data) => {
      this.movies = data;
    })
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.textoPelicula = params.texto
      this.buscarPelicula();
    })
  }

}
