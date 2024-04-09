import { useEffect, useState } from "react";
import { getTrendMovies } from "../../../servic/API";
import { Link, useLocation } from "react-router-dom";

const MoviesList = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchTopMovies() {
      try {
        const data = await getTrendMovies();
        setTopMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchTopMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul>
      {topMovies.map(movie => (
        <li key={movie.id}>
          <Link to={{
            pathname: `/movies/${movie.id}`,
            state: { from: location }
          }}>{movie.title}</Link>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default MoviesList;














{/*import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
  
export default MovieList;*/}