import MovieItem from "../MovieItem";
import { Movie } from "../../types";

interface MoviesListProps {
  movies: Movie[];
}

export default function MoviesList({ movies }: MoviesListProps) {
  const moviesItems = movies.map((movie: Movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return <div className="movies-list">{moviesItems}</div>;
}
