import "./assets/css/styles.css";
import "./assets/css/header.css";
import "./assets/css/modal.css";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";
import { useState, useEffect } from "react";
// import movies from "./data/popular.json";
import genres  from "./data/genres.json";
import axios from "axios";
import { Genre, Movie } from "./types";


export default function App() {

  const [selectedCategory, setSelectedCategory] = useState<number | 0>(0);
  const [search, setSearch] = useState<string | ''>('');
  const [sortByFeatured, setSortByFeatured] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesGenres, setMoviesGenres] = useState<Genre[]>([]);
 


  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const handleFilterChange = (search: string) => {
    setSearch(search);
  };

  const handleToggleFeatured = () => {
    setSortByFeatured((prev) => !prev);
  };

  const normalizedMovies = movies.map((movie) => ({
    ...movie, 
    featured: movie.featured || false, 
  }));

  const filteredMovies = normalizedMovies
    .filter((movie) => {
      
      if (selectedCategory) {
        return movie.genre_ids.includes(selectedCategory);
      }
      return true; 
    })
    .filter((movie) => {
      
      if (search) {
        return movie.title.toLowerCase().includes(search.toLowerCase());
      }
      return true; 
    })
    .sort((a, b) => {
        
      if (sortByFeatured) {
        return Number(b.featured) - Number(a.featured);
      }
      return 0; 
    });

  useEffect(() => {
    axios
      .get("https://wise-splendor-784428c639.strapiapp.com/api/movies")//strapi api
      .then((response) => setMovies(response.data.data))
      .catch((error) => console.error("Erro ao buscar filmes:", error));
  }, []);

  useEffect(() => {
  
    const uniqueGenres = Array.from(
      new Set(
        movies.flatMap((movie) => movie.genre_ids)
      )
    );
    const categoriesFiltered = genres.filter((category) =>
      uniqueGenres.includes(category.id)
    );
  
    setMoviesGenres(categoriesFiltered);

  }, [movies, genres]);
  


  return (
    <div className="App">
     
        <Header
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onFilterChange={handleFilterChange}
          onToggleFeatured={handleToggleFeatured}
          genres={moviesGenres}
        />
        
        <MoviesList movies={filteredMovies}></MoviesList>
        
    </div>
  );
}
