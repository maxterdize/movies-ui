import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {MoviesHttpService} from '../services/movies-http.service';
import {Movie} from '../model/movie';


@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies$!: Observable<Movie[]>;

  displayedColumns = ['seqNo', 'description', 'duration'];

  nextPage = 0;

  constructor(
    private moviesService: MoviesHttpService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.movies$ = this.moviesService.findAllMovies();

  }

}
