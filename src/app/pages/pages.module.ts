import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarCComponent } from './buscar-c/buscar-c.component';



@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarCComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
