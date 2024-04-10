import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/API";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const data = await getMovieCast(movieId);
        setCast(data.cast);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  if (loading) return <div>Loading cast...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
























































{/*import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { getMovieCast } from "..//../servic/API";


const MovieCast = () => {
  const { moviesId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function getInfoMoviesCast() {
      try {
        const data = await getMovieCast(moviesId);
        setMovieCast(data.cast);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        console.log();
      }
    }

    getInfoMoviesCast();
  }, [moviesId]);

  return (
    <ul >
      {Array.isArray(movieCast) &&
        movieCast.map((item) => {
          return (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt=""
              />
              <p>{item.name}</p>
            </li>
          );
        })}
    </ul>
  );
};
export default MovieCast;*/}












{/*import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const MovieCast = () => {
  const { movieId } = useParams(); 
  const [movieCast,] = useState([]);

  useEffect(() => {
    async function getInfoMoviesCast() {
      try {
        const data = await (movieId);
      (data.cast);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        console.log();
      }
    }

    getInfoMoviesCast();
  }, [movieId]);

  return (
    <ul>
      {Array.isArray(movieCast) &&
        movieCast.map((item) => {
          return (
            <li key={item.id}>
              <img
                
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt=""
              />
              <p >{item.name}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieCast;*/}
