import {Pipe, PipeTransform} from "@angular/core";
import {Thumbnail} from "../services/tmdb.service";


@Pipe({
  name: 'imageSource',
})

export class ImageSourcePipe implements PipeTransform {
  transform(value: Thumbnail, size = ''): string {
    return `${value.path}/${size}.${value.extension}`;
  }
}
