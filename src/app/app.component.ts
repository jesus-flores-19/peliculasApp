import { Component } from '@angular/core';
import { CarteleraResponse } from './interface/cartelera.interface';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviesApp';

  constructor(public peliculasService: PeliculasService){
    this.peliculasService.getCartelera().subscribe((data) => {
      console.log(data);
    })
  }
}
