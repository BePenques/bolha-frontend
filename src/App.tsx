import "./assets/css/styles.css";
import "./assets/css/header.css";
import "./assets/css/modal.css";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";
import { useState } from "react";
import movies from "./data/popular.json";


export default function App() {

  const [selectedCategory, setSelectedCategory] = useState<number | 0>(0);
  const [search, setSearch] = useState<string | ''>('');
  const [sortByFeatured, setSortByFeatured] = useState(false);


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


  return (
    <div className="App">
     
        <Header
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onFilterChange={handleFilterChange}
          onToggleFeatured={handleToggleFeatured}
        />
        
        <MoviesList movies={filteredMovies}></MoviesList>
        
    </div>
  );
}
