import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from '../reducers';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';
import {loadAllMovies} from './movie.actions';
import {areMoviesLoaded} from './movies.selector';


@Injectable()
export class MoviesResolver implements Resolve<any> {

  loading = false;

  constructor(private store: Store<AppState>) {

  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {

    return this.store
      .pipe(
        select(areMoviesLoaded),
        tap(moviesLoaded => {
          if (!this.loading && !moviesLoaded) {
            this.loading = true;
            this.store.dispatch(loadAllMovies());
          }
        }),
        filter(moviesLoaded => moviesLoaded),
        first(),
        finalize(() => this.loading = false)
      );

  }

}
