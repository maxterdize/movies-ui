import {Request, Response} from 'express';
import {MOVIES} from './db-data';


export function saveMovie(req: Request, res: Response) {

    console.log("Saving movie ...");

    const id = req.params["id"],
        changes = req.body;

    MOVIES[id] = {
        ...MOVIES[id],
        ...changes
    };

    setTimeout(() => {

      res.status(200).json(MOVIES[id]);

    }, 2000);

}

