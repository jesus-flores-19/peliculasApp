import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interface/cartelera.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getCartelera(): Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>("https://api.themoviedb.org/3/movie/now_playing?api_key=2819c6599132cb1c015ba87a44ea1cb5&language=es-ES&page=1");
  }
}
