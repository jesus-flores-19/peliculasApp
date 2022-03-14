import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails} from 'src/app/interface/movie.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from "@angular/common"
import { Cast } from 'src/app/interface/credits.interface';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  idPelicula = ""
  public pelicula: MovieDetails | null;
  public cast: Cast[]

  constructor(private rutaActiva: ActivatedRoute, private service: PeliculasService, 
              private location: Location, private router: Router) { 
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(ruta => {
      this.idPelicula = ruta.id;

      this.service.informacionPelicula(this.idPelicula).subscribe(res => {
        if(!res){
          this.router.navigateByUrl("/home")
          return
        }
        this.pelicula = res
      })

      this.service.actoresPelicula(this.idPelicula).subscribe(res => {
        this.cast = res
      })
      
    })
  }

  regresar(){
    this.location.back()    
  }

}
