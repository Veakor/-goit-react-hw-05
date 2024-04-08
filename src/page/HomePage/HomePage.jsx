import { NavLink } from "react-router-dom";
import { MovieList } from "./MovieList/MovieList";

const HomePage = () => {
  const { topMovies } = MovieList();

  return (
    <div >
      <h1>Trending today</h1>
      <ul >
        {Array.isArray(topMovies) &&
          topMovies.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={`/movies/${item.id}`}>{item.title}</NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HomePage;


{/*import { useState, useEffect } from 'react';
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
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDk5NDJiOWNiOTMzMWQzYjU4MGE5YzU1NDgwMTdmNCIsInN1YiI6IjY2MTJkZTMxMDQ4NjM4MDE2MzE5NjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIQgtNvQ_0iJJPekOo952avB3e-1LwgBmjDHRulmb-w',
            },
          }
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
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
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;*/}