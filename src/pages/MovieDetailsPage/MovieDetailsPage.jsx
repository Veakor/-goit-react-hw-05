import { useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation, Routes, Route, Outlet } from "react-router-dom";
import { getDetailsMovies } from "..//../servic/API";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const [itemCardMovie, setItemCardMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function getItemMovies() {
      try {
        const data = await getDetailsMovies(movieId);
        setItemCardMovie(data);
      } catch (error) {
        console.log("error: ", error);
      }
    }

    getItemMovies();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current}>
        ⬅ Go Back
      </Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${itemCardMovie.poster_path}`}
          alt={itemCardMovie.original_title}
        />
        <div>
          <h2>{itemCardMovie.original_title}</h2>
          <p>
            User Score:{" "}
            {itemCardMovie.vote_average ? itemCardMovie.vote_average.toFixed(2) : "N/A"}%
          </p>
          <h3>Overview</h3>
          <p>{itemCardMovie.overview}</p>
          <p>Genres</p>
          <ul>
            {itemCardMovie.genres &&
              itemCardMovie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>Additional information:</h3>
        <ul>
          <li>
            <Link to={`${movieId}/cast`}>Cast</Link>
          </li>
          <li>
          
          </li>
          <li>
            <Link to={`${movieId}/reviews`}>Reviews</Link>
          </li>
          
        </ul>
      </div>
      
      <Outlet />
      <Routes>
      <Route path="/movies/:movieId/cast" element={<MovieCast />} /> 
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
      </Routes>
    </div>
   
  );
};

export default MovieDetailsPage;