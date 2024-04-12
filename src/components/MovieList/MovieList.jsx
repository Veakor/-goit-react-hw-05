
//import { getTrendMovies } from "../../servic/API";
import { Link, useLocation } from "react-router-dom";



const MoviesList = ({movies}) => {
  const location = useLocation();
  

  return (
    <div>
      <ul>
      {movies.map ((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state ={location}> 
          {movie.title}
          </Link>
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