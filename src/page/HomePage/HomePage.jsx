import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';

const HomePage = () => {
  const [movies] = useState([]);

  // Отримання списку фільмів під час завантаження сторінки
  useEffect(() => {
    // Ваш код для отримання списку фільмів
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;