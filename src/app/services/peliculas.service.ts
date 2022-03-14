import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators"

import { CarteleraResponse, Movie} from '../interface/cartelera.interface';
import { MovieDetails } from '../interface/movie.interface';
import {Cast, CreditsResponse } from '../interface/credits.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  private api_movie: string = "https://api.themoviedb.org/3"
  private pageCartelera: number = 1;
  public cargardoApi: boolean = false;

  get params(){
    return {
      api_key: "2819c6599132cb1c015ba87a44ea1cb5",
      language: "es-MX",
      page: this.pageCartelera
    }
  }

  getCartelera(): Observable<Movie[]>{
    if(this.cargardoApi){
      return of([])
    }

    this.cargardoApi = true
    return this.http.get<CarteleraResponse>(`${this.api_movie}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map( (data) => data.results),
      tap( () => {
        this.pageCartelera +=1;
        this.cargardoApi = false
      })
    );
  }

  buscarPeliculas(texto: string): Observable< Movie[]>{
    const params= {...this.params, page: "1", query: texto}
    return this.http.get<CarteleraResponse>(`${this.api_movie}/search/movie`, {
      params
    }).pipe(
      map(data => data.results)
    )
  }

  informacionPelicula(id: string): Observable<MovieDetails | null> {
    const params = this.params
    return this.http.get<MovieDetails>(`${this.api_movie}/movie/${id}`, { params }).pipe(
      catchError(err => of(null) )
    )
  }

  actoresPelicula(id: string): Observable<Cast[]>{
    const params = this.params
    return this.http.get<CreditsResponse>(`${this.api_movie}/movie/${id}/credits`, { params }).pipe(
      map( resp => resp.cast ),
      catchError(err => of([]) )
    ) 
  }

  resetCarteleraPage(): void{
    this.pageCartelera = 1;
  }




}
