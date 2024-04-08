import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { getMovieCast } from "../../sevices/API";


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
export default MovieCast;












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
