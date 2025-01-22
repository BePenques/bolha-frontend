import "./assets/css/styles.css";
import "./assets/css/header.css";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <MoviesList></MoviesList>
    </div>
  );
}
