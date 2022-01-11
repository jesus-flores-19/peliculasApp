import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinposterPipe } from './sinposter.pipe';



@NgModule({
  declarations: [
    SinposterPipe
  ],
  exports: [
    SinposterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
