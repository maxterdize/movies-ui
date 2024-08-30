import {Request, Response} from 'express';
import {MOVIES} from "./db-data";


export function deleteMovie(req: Request, res: Response) {

    console.log("Deleting movie ...");

    const id = req.params["id"];

    const movie = MOVIES[id];

    delete MOVIES[id];

    setTimeout(() => {

      res.status(200).json({id});

    }, 2000);

}

