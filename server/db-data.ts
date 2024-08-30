export const USERS = {
  1: {
    id: 1,
    email: 'test@user.com',
    password: 'password'
  }

};


export const MOVIES: any = {

  1: {
    id: 1,
    imdbID: "tt0215750",
    title: "Enemy at the Gates",
    year: "2001",
    rated: null,
    released: null,
    runtime: null,
    genre: null,
    director: null,
    actors: null,
    plot: null,
    language: null,
    country: null,
    poster: "https://m.media-amazon.com/images/M/MV5BYWFlY2E3ODQtZWNiNi00ZGU4LTkzNWEtZTQ2ZTViMWRhYjIzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    imdbRating: null,
    owner: null
  },

};




export function findMovieById(id: number) {
  return MOVIES[id];
}


export function authenticate(email: string, password: string) {

  const user: any = Object.values(USERS).find(user => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }

}
