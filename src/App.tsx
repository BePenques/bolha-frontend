import "./assets/css/styles.css";
import "./assets/css/header.css";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";
import { useState } from "react";
import movies from "./data/popular.json";

export default function App() {

  const [selectedCategory, setSelectedCategory] = useState<number | 0>(0);

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const filteredMovies = selectedCategory
  ? movies.filter((movie) => movie.genre_ids.includes(selectedCategory))
  : movies;
  
  return (
    <div className="App">
      <Header
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <MoviesList movies={filteredMovies}></MoviesList>
    </div>
  );
}
