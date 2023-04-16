import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = 'https://api.themoviedb.org/3/';
const apikey = '6dcedab3b452574769cef95cc4791224';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept<T>(
    req: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpEvent<T>> {
    return next.handle(
      req.clone({
        url: baseUrl + req.url,
        params: req.params.append('api_key', apikey),
      })
    );
  }
}
