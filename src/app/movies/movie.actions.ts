import {createAction, props} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {Movie} from './model/movie';


export const loadAllMovies = createAction(
    "[Movies Resolver] Load All Movies"
);


export const allMoviesLoaded = createAction(
    "[Load Movies Effect] All Movies Loaded",
    props<{movies: Movie[]}>()
);


export const movieUpdated = createAction(
  "[Edit Movie Dialog] Movie Updated",
  props<{update: Update<Movie>}>()
);

