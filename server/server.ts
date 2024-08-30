

import * as express from 'express';
import {Application} from "express";
import {loginUser} from "./auth.route";
import {saveMovie} from './save-movie.route';
import {deleteMovie} from './delete-movie.route';
import {createMovie} from './create-movie.route';
import {getAllMovies} from './get-movies.route';


const bodyParser = require('body-parser');



const app: Application = express();


app.use(bodyParser.json());


app.route('/api/login').post(loginUser);

app.route('/api/movies').get(getAllMovies);

app.route('/api/movie').post(createMovie);

app.route('/api/movie/:id').put(saveMovie);

app.route('/api/movie/:id').delete(deleteMovie);





const httpServer:any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




