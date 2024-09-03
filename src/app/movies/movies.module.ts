import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {HomeComponent} from './home/home.component';
import {EditMovieDialogComponent} from './edit-movie-dialog/edit-movie-dialog.component';
import {MoviesResolver} from './movies.resolver';
import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from './movie/movie.component';
import {MoviesCardListComponent} from './movies-card-list/movies-card-list.component';
import {EffectsModule} from "@ngrx/effects";
import {moviesReducer} from "./reducers/movie.reducers";
import {StoreModule} from "@ngrx/store";
import {MoviesEffects} from "./movies.effects";
import {MoviesHttpService} from "./services/movies-http.service";

export const moviesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      movies: MoviesResolver
    }

  }
];

@NgModule({
  declarations: [
    HomeComponent,
    EditMovieDialogComponent,
    MoviesCardListComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    RouterModule.forChild(moviesRoutes),
    EffectsModule.forFeature([MoviesEffects]),
    StoreModule.forFeature("movies", moviesReducer)
  ],
  providers: [
    MoviesHttpService,
    MoviesResolver
  ]
})
export class MoviesModule { }
