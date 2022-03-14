import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';
import { MovieDetails} from 'src/app/interface/movie.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from "@angular/common"
import { Cast } from 'src/app/interface/credits.interface';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  idPelicula = ""
  public pelicula: MovieDetails | null;
  public cast: Cast[] = []

  constructor(private rutaActiva: ActivatedRoute, private service: PeliculasService, 
              private location: Location, private router: Router) { 
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(ruta => {
      this.idPelicula = ruta.id;

      combineLatest([
        this.service.informacionPelicula(this.idPelicula),
        this.service.actoresPelicula(this.idPelicula)
      ]).subscribe( ([pelicula, cast]) => {
        if(!pelicula){
          this.router.navigateByUrl("/home")
          return
        }
        this.pelicula = pelicula
        this.cast = this.cast.filter(actor => actor.profile_path !== null)
      })
      
    })
  }

  regresar(){
    this.location.back()    
  }

}
