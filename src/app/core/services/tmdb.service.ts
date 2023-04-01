import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {combineLatest, Observable} from 'rxjs';

export interface Movies {
  results: (ResultsEntity)[];
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}

export interface ResultsEntity {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids?: (number)[] | null;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  budget:number;
  homepage:string;
  imdb_id:string;
  original_lan:string;
  production_companies:any;
  production_countries:any;
  revenue:number;
  runtime:number;
  status:string;
  tagline:string;
  genre:any;
  background_image:any;
  watchprovider:any;
  reviewList:any;
  backdropList:any;
  logoList:any;
  posterList:any
  castList:any;
  crewList:any;
  similarmovieList:any;
  recmovieList:any;
  videoList:any;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

const enum endpoint {
  top_rated = '/movie/top_rated',
  upComing = '/movie/upcoming',
  popular = '/movie/popular',
  movieID = '/movie/',
  search = '/search'
}

const params = new HttpParams()
  .set('api_key', '6dcedab3b452574769cef95cc4791224')

@Injectable({
  providedIn: 'root'
})

export class tmdbService {
  private url = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  searchMovies(searchStr: string): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}${endpoint.search}/movie?api_key=6dcedab3b452574769cef95cc4791224&query=${searchStr}`);
  }

  getMovie(id: any): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}${endpoint.movieID}${id}?&language=en-EN`, { params })
  }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}${endpoint.top_rated}`, { params } )
  }

  getPopular(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}${endpoint.popular}`, { params })
  }

  getUpComing(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}${endpoint.upComing}`, { params })
  }

  getMovieCredits(id: number | undefined): Observable<any> {
    return this.http.get(`${this.url}${endpoint.movieID}${id}/credits`, { params })
  }
}
