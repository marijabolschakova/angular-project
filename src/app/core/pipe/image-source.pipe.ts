import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'imageSource',
})

export class ImageSourcePipe implements PipeTransform {
  public transform(size: string, value: string | undefined): string {
    return `https://image.tmdb.org/t/p/${size}${value}`;
  }
}
