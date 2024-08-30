import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../model/movie';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface MovieResponse {
  payload: Movie[];
}

@Injectable()
export class MoviesHttpService {

  constructor(private http:HttpClient) {
  }

  findAllMovies(): Observable<Movie[]> {
    return this.http.get<MovieResponse>('/api/movies')
      .pipe(
        map(res => res['payload'])
      );
  }

}
