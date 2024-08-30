import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Movie} from '../model/movie';
import {Observable} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {Update} from '@ngrx/entity';
import {movieUpdated} from '../movie.actions';

interface DialogData {
  dialogTitle: string;
  movie: Movie;
  mode: 'create' | 'update';
}

@Component({
  selector: 'movie-dialog',
  templateUrl: './edit-movie-dialog.component.html',
  styleUrls: ['./edit-movie-dialog.component.css']
})
export class EditMovieDialogComponent {

  form!: FormGroup;

  dialogTitle: string;

  movie: Movie;

  mode: 'create' | 'update';

  loading$!:Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
    private store: Store<AppState>) {

    this.dialogTitle = data.dialogTitle;
    this.movie = data.movie;
    this.mode = data.mode;

    const formControls = {
      description: ['', Validators.required],
      category: ['', Validators.required],
      longDescription: ['', Validators.required],
      promo: ['', []]
    };

    if (this.mode == 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({...data.movie});
    }
    else if (this.mode == 'create') {
      this.form = this.fb.group({
        ...formControls,
        url: ['', Validators.required],
        iconUrl: ['', Validators.required]
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {

    const movie: Movie = {
      ...this.movie,
      ...this.form.value
    };

    const update: Update<Movie> = {
      id: movie.id,
      changes: movie
    };

    this.store.dispatch(movieUpdated({update}));

    this.dialogRef.close();


  }
}
