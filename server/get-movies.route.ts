

import {Request, Response} from 'express';
import {MOVIES} from "./db-data";



export function getAllMovies(req: Request, res: Response) {

    console.log("Retrieving movies data ...");

    setTimeout(() => {

      res.status(200).json({payload:Object.values(MOVIES)});

    }, 1000);



}


export function getMovieByImdbID(req: Request, res: Response) {

    const id = req.params["id"];

    const movies:any = Object.values(MOVIES);

    const movie = movies.find((movie: { id: string; }) => movie.id == id);

    setTimeout(() => {

      res.status(200).json(movie);

    }, 1000);


}
