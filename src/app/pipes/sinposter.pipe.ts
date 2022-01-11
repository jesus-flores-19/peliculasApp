import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinposter'
})
export class SinposterPipe implements PipeTransform {

  transform(value: string): string | null {
    
    const foto = value
    if(foto){
      return `https://image.tmdb.org/t/p/w500${value}`
    }else{
      return "../../../assets/no-image.jpg"
    }
    
    
  }

}
