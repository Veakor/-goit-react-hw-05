import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer your_access_token_here',
            },
          }
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Home Page</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;