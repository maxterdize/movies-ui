export interface Movie {

   id: number;
   imdbID: string;
   title: string;
   year: string;
   rated: string;
   released: string;
   runtime: string;
   genre: string;
   director: string;
   actors: string;
   plot: string;
   language: string;
   country: string;
   poster: string;
   imdbRating: string;
   owner: string;
}

export function compareMovies(c1: Movie, c2: Movie){

  const compare = c1.id - c2.id;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}
