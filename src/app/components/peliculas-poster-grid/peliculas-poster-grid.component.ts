import { Component, OnInit, Input, HostListener} from '@angular/core';
import { Movie } from 'src/app/interface/cartelera.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movie[]

  @HostListener("window:scroll", ["$event"])
    onScrroll(){
      const pos = document.documentElement.scrollTop || document.body.scrollTop
      const max = document.documentElement.scrollHeight || document.body.scrollHeight
      if(pos > (max - 900)){
        this._peliculasService.getCartelera().subscribe( data => {
          this.movies.push(...data)
        })
      }
      
    }

  constructor( private _peliculasService: PeliculasService, public router: Router) { }

  ngOnInit(): void {
  } 

  mostrarPelicula(id: any) {
    this.router.navigate(["pelicula", id])
  }

}
