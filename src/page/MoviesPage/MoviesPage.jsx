import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import axios from 'axios';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  useEffect(() => {
    const apiKey = '909942b9cb9331d3b580a9c5548017f4';
    axios.get('https://api.themoviedb.org/3/trending/movie/day', {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => {
      setMovies(response.data.results); 
    })
    .catch(error => {
      console.error('Error fetching trending movies:', error);
    });
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/movies?query=${searchQuery}`);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1>Movies Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;