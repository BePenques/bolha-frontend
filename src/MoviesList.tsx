import MovieItem from "./MovieItem";
import movies from "./data/popular.json";
import { Movie } from "./types";

export default function MoviesList() {
  const moviesItems = movies.map((movie: Movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return <div className="movies-list">{moviesItems}</div>;
}
