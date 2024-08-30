import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {defaultDialogConfig} from '../shared/default-dialog-config';
import { MatDialog } from '@angular/material/dialog';
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {Movie} from '../model/movie';
import {selectAllMovies} from '../movies.selector';
import {EditMovieDialogComponent} from '../edit-movie-dialog/edit-movie-dialog.component';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    movies$!: Observable<Movie[] | null>;


    constructor(
      private dialog: MatDialog,
      private store: Store<AppState>) {

    }

    ngOnInit() {
      this.reload();
    }

  reload() {

        this.movies$ = this.store.pipe(select(selectAllMovies));

  }

  onAddMovie() {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Create Movie",
      mode: 'create'
    };

    this.dialog.open(EditMovieDialogComponent, dialogConfig);

  }


}
