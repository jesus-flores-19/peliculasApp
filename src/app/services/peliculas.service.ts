import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators"
import { CarteleraResponse } from '../interface/cartelera.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  private api_movie: string = "https://api.themoviedb.org/3"
  private pageCartelera: number = 1;

  get params(){
    return {
      api_key: "2819c6599132cb1c015ba87a44ea1cb5",
      language: "es-ES",
      page: this.pageCartelera
    }
  }

  getCartelera(): Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>(`${this.api_movie}/movie/now_playing`, {
      params: this.params
    }).pipe(
      tap( () => {
        this.pageCartelera +=1 ;
      })
    );
  }
}
