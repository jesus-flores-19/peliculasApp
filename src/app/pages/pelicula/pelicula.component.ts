import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  idPelicula = ""

  constructor(private rutaActiva: ActivatedRoute, private service: PeliculasService) { 
    this.rutaActiva.params.subscribe(ruta => {
      this.idPelicula = ruta.id;
      this.service.informacionPelicula(this.idPelicula).subscribe(res => console.log(res))
    })
  }

  ngOnInit(): void {
  }

}
