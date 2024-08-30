import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {compareMovies, Movie} from '../model/movie';
import {createReducer, on} from '@ngrx/store';
import {MovieActions} from '../action-types';

export interface MoviesState extends EntityState<Movie>{
  allMoviesLoaded: boolean
}

export const adapter = createEntityAdapter<Movie>({
  sortComparer: compareMovies
});

export const initialMoviesState = adapter.getInitialState({
  allMoviesLoaded:false
});

export const moviesReducer = createReducer(

  initialMoviesState,

  on(MovieActions.allMoviesLoaded,
    (state, action) => adapter.setAll(
      action.movies,
      {...state,
        allMoviesLoaded:true
      })),


  on(MovieActions.movieUpdated, (state, action) =>
    adapter.updateOne(action.update, state) )

);


export const {
  selectAll
} = adapter.getSelectors();
