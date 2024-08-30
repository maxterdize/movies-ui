import {Request, Response} from 'express';
import {MOVIES} from './db-data';

export var moviesKeyCounter = 100;

export function createMovie(req: Request, res: Response) {

    console.log("Creating new movie ...");

    const changes = req.body;

    const newMovie = {
        id: moviesKeyCounter,
      seqNo: moviesKeyCounter,
        ...changes
    };

  MOVIES[newMovie.id] = newMovie;

  moviesKeyCounter += 1;

    setTimeout(() => {

      res.status(200).json(newMovie);

    }, 2000);

}

