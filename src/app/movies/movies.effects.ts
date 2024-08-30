import {MovieActions} from "./action-types";
import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {concatMap} from "rxjs";
import {map} from "rxjs/operators";
import {MoviesHttpService} from "./services/movies-http.service";
import {allMoviesLoaded} from "./movie.actions";

@Injectable()
export class MoviesEffects {

    loadCourses$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(MovieActions.loadAllMovies),
                concatMap(action =>
                    this.moviesHttpService.findAllMovies()),
                map(movies => allMoviesLoaded({movies}))

            )
    );


    saveCourse$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(MovieActions.movieUpdated),
                concatMap(action => this.moviesHttpService.saveMovie(
                    action.update.id,
                    action.update.changes
                ))
            ),
        {dispatch: false}
    );

    constructor(private actions$: Actions,
                private moviesHttpService: MoviesHttpService) {

    }

}
