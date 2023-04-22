import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'imageSource',
})

export class ImageSourcePipe implements PipeTransform {
  public transform(name: string | undefined, size: string): string {
    return `https://image.tmdb.org/t/p/${size}${name}`;
  }
}
