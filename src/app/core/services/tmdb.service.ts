import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Movies {
  results: (ResultsEntity)[];
  dates: Dates;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  job: string;
}

export interface ResultsEntity {
  title: string;
  vote_count: number;
  poster_path: string;
  id: number;
  backdrop_path: string;
  original_title: string;
  genre_ids?: (number)[] | null;
  overview: string;
  release_date: string;
  tagline:string;
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
  movieID = '/movie/'
}

@Injectable({
  providedIn: 'root'
})

export class tmdbService {
  private url = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

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

  getMovieCredits(id: string): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}${endpoint.movieID}${id}/credits`)
  }

  getPersonDetail(id: string): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/person/${id}`);
  }

  getPersonCast(id: string): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/person/${id}/movie_credits`);
  }
}
