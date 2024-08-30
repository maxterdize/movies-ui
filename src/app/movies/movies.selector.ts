import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MoviesState} from './reducers/movie.reducers';

import * as fromMovies from './reducers/movie.reducers';

export const selectMoviesState =
  createFeatureSelector<MoviesState>("movies");

export const selectAllMovies = createSelector(
  selectMoviesState,
  fromMovies.selectAll
);

export const areMoviesLoaded = createSelector(
  selectMoviesState,
  state => state.allMoviesLoaded
);
