import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams
} from "@angular/common/http";
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

export interface GuestSessionDetails {
  expires_at: string;
  guest_session_id: string;
  success: boolean;
}

const enum endpoint {
  top_rated = '/movie/top_rated',
  upComing = '/movie/upcoming',
  popular = '/movie/popular',
  movieID = '/movie/',
  search = 'search'
}

@Injectable({
  providedIn: 'root'
})

export class tmdbService {
  public sessionId = "";

  constructor(private http: HttpClient) { }

  searchMovies(searchStr: string): Observable<Movies> {
    const params = new HttpParams({fromString: '&query=' + searchStr});
    return this.http.get<Movies>(`${endpoint.search}/movie`, { params });
  }

  getSessionId(): Observable<GuestSessionDetails> {
    return this.http.get<GuestSessionDetails>(`/authentication/guest_session/new?`)
  }

  rateMovie(rate: number, movieId: number) {
    const body = JSON.stringify({ stars: rate });
    const params = new HttpParams().set('guest_session_id', this.sessionId)

    return this.http.post(
      `${movieId}/rating`,
      body,
      {
        params: params
      }
    );
  }

  getMovie(id: any): Observable<Movies> {
    const params = new HttpParams({fromString: '?&language=en-EN'});
    return this.http.get<Movies>(`${endpoint.movieID}${id}`, { params })
  }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(`${endpoint.top_rated}`)
  }

  getPopular(): Observable<Movies> {
    return this.http.get<Movies>(`${endpoint.popular}`)
  }

  getUpComing(): Observable<Movies> {
    return this.http.get<Movies>(`${endpoint.upComing}`)
  }

  getMovieCredits(id: string): Observable<any> {
    return this.http.get(`${endpoint.movieID}${id}/credits`)
  }
}
