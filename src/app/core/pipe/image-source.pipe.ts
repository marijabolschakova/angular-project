import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'imageSource',
})

export class ImageSourcePipe implements PipeTransform {
  public transform(name: string | undefined, size: string): string {
    return `https://image.tmdb.org/t/p/${size}${name}`;
  }
}

/*
of(MY_URL) get

1) <img [src]="item.poster | imageSource: 'original' | async">
2) <img [imageSource]="item.poster" [imageSize]="original">
 */
