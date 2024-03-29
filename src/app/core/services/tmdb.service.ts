import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {
  HttpClient,
  HttpParams
} from "@angular/common/http";

export interface Movies {
  title: string;
  vote_count: number;
  poster_path: string;
  id: number;
  backdrop_path: string;
  original_title: string;
  genres?: Genre[] | null;
  overview: string;
  release_date: string;
  tagline:string;
  vote_average: number;
  runtime: number;
  genre_ids?: Genre[] | null;
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
  biography: string;
  birthday: number;
  deathday: number;
  place_of_birth: string;
}

interface Genre {
  id: number;
  name: string;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface GuestSessionDetails {
  expires_at: string;
  guest_session_id: string;
  success: boolean;
}

export interface BasicSearch {
  backdrop_path: string;
  first_air_date?: string;
  release_date?: string;
  id: number;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  profile_path: string;
  genres: [{ id: number, name: string }];
  adult: boolean;
  gender: number;
  character: string;
  department: string;
  job: string;
  known_for_department: string;
}

export interface TitledSearch extends BasicSearch {
  media_type: 'movie';
  title: string;
}
export interface NamedSearch extends BasicSearch {
  media_type: 'tv' | 'person';
  name: string;
}

export type Search = NamedSearch | TitledSearch;

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
  public sessionId = "";

  constructor(private http: HttpClient) { }

  searchMovies(searchStr: string): Observable<Search[]> {
    const params = new HttpParams({fromString: 'query=' + searchStr});
    return this.http.get<{ results: Search[] }>(`${endpoint.search}/multi`, { params }).pipe(
      map(
        response => response.results
      ),
    );
  }

  getSessionId(): Observable<GuestSessionDetails> {
    return this.http.get<GuestSessionDetails>(`/authentication/guest_session/new?`)
  }

  getMovie(id: any): Observable<Movies> {
    const params = new HttpParams({fromString: '?&language=en-EN'});
    return this.http.get<Movies>(`${endpoint.movieID}${id}`, { params })
  }

  getTopRated(): Observable<Movies[]> {
    return this.http.get<{ results: Movies[] }>(`${endpoint.top_rated}`).pipe(
      map(
        response => response.results
      ),
    );
  }

  getPopular(): Observable<Movies[]> {
    return this.http.get<{ results: Movies[] }>(`${endpoint.popular}`).pipe(
      map(
        response => response.results
      ),
    );
  }

  getUpComing(): Observable<Movies[]> {
    return this.http.get<{ results: Movies[] }>(`${endpoint.upComing}`).pipe(
      map(
        response => response.results
      ),
    );
  }

  getMovieCredits(id: string): Observable<Movies> {
    return this.http.get<Movies>(`${endpoint.movieID}${id}/credits`)
  }

  getPersonDetail(id: string): Observable<Cast> {
    return this.http.get<Cast>(`/person/${id}`);
  }

  getPersonCast(id: string): Observable<Movies[]> {
    return this.http.get<{ results: Movies[] }>(`/person/${id}/movie_credits`).pipe(
      map(
        response => response.results
      ),
    );
  }
}
