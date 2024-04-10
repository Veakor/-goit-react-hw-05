import { useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation, Route,Routes, Outlet } from "react-router-dom";
import { getDetailsMovies } from "..//../servic/API";
const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../../components/MovieReviews/MovieReviews"));
import { Suspense, lazy } from 'react';

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

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
      <Route path="cast" element={<MovieCast />} />
      <Route path="reviews" element={<MovieReviews />} />
      </Routes>
      </Suspense>

    </div>
   
  );
};

export default MovieDetailsPage;