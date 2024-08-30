import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {defaultDialogConfig} from '../shared/default-dialog-config';
import {Movie} from '../model/movie';
import {EditMovieDialogComponent} from '../edit-movie-dialog/edit-movie-dialog.component';

@Component({
    selector: 'movies-card-list',
    templateUrl: './movies-card-list.component.html',
    styleUrls: ['./movies-card-list.component.css']
})
export class MoviesCardListComponent implements OnInit {

    @Input()
    movies: Movie[] | null = [];

    @Output()
    movieChanged = new EventEmitter();

    constructor(
      private dialog: MatDialog ) {
    }

    ngOnInit() {

    }

    editMovie(movie:Movie) {

        const dialogConfig = defaultDialogConfig();

        dialogConfig.data = {
          dialogTitle:"Edit Movie",
          movie,
          mode: 'update'
        };

        this.dialog.open(EditMovieDialogComponent, dialogConfig)
          .afterClosed()
          .subscribe(() => this.movieChanged.emit());

    }

  onDeleteMovie(movie:Movie) {


  }

}









