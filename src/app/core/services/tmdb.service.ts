import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

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

export interface Thumbnail {
  path: string;
  extension: string;
}

const enum endpoint {
  top_rated = '/movie/top_rated',
  upComing = '/movie/upcoming',
  popular = '/movie/popular',
  movieID = '/movie/',
  search = '/search'
}

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
    return this.http.get<Movies>(`${this.url}${endpoint.movieID}${id}?&language=en-EN`)
  }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}${endpoint.top_rated}`)
  }

  getPopular(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}${endpoint.popular}`)
  }

  getUpComing(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}${endpoint.upComing}`)
  }

  getMovieCredits(id: string): Observable<any> {
    return this.http.get(`${this.url}${endpoint.movieID}${id}/credits`)
  }
}
