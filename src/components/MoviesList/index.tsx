import MovieItem from "../MovieItem";
import { Movie } from "../../types";
import MovieModal from "../MovieModal";
import * as Dialog  from "@radix-ui/react-dialog";

interface MoviesListProps {
  movies: Movie[];
}

export default function MoviesList({ movies }: MoviesListProps) {

  

  const moviesItems = movies.map((movie: Movie) => (
    <Dialog.Root key={movie.id}>
      <Dialog.Trigger asChild>
        <div style={{ cursor: "pointer" }}>
          <MovieItem movie={movie} />
        </div>
      </Dialog.Trigger>
      <MovieModal movie={movie} />
    </Dialog.Root>
  ));

  return (
    <div className="container">
      <main>      
          <div className="movies-list">{moviesItems}</div>
      </main>
    </div>
  );
}
