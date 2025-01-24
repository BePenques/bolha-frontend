import * as Dialog from "@radix-ui/react-dialog";
import { Movie } from "../../types";

interface MovieModalProps {
  movie: Movie
}

const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

export default function MovieModal({movie}: MovieModalProps) {

  return (
  
    <Dialog.Portal>
    <Dialog.Overlay className="dialog-overlay" /> 
    <Dialog.Content className="dialog-content">
      <Dialog.Title className="dialog-title">{movie.title}</Dialog.Title>
      <Dialog.Description className="dialog-description">
        <div className="movie-header">
            <img
            src={`${assetsUrl}${movie.poster_path}`}
            alt={movie.title}
            className="dialog-poster"
            />
            <p>{movie.overview}</p>
        </div>
        <div className="movie-infos">
            <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
            <p><strong>Nota:</strong> {movie.vote_average}</p>
        </div>
      </Dialog.Description>
      <Dialog.Close asChild>
        <button className="dialog-close">Fechar</button>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
  );
};

