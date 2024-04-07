import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_API_KEY'
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <MovieList movies={popularMovies} />
    </div>
  );
};

export default HomePage;