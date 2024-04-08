import { Suspense, useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import { getDetailsMovies } from "../../sevices/API";


const MovieDetailsPage = () => {
  const [itemCardMovie, setItemCardMovie] = useState([]);
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function getItemMovies() {
      try {
        const data = await getDetailsMovies(moviesId);
        setItemCardMovie(data);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        console.log();
      }
    }

    getItemMovies();
  }, [moviesId]);

  return (
    <div>
      <Link to={backLinkRef.current}>
        ⬅ Go Back
      </Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${itemCardMovie.backdrop_path}`}
          alt=""
        />
        <div>
          <h2>{itemCardMovie.original_title}</h2>
          <p>
            User Score:{" "}
            {itemCardMovie.length !== 0 &&
              itemCardMovie.vote_average.toFixed(2)}
            %
          </p>
          <h3>Overview</h3>
          <p>{itemCardMovie.overview}</p>
          <p>Genres</p>
          <ul >
            {Array.isArray(itemCardMovie.genres) &&
              itemCardMovie.genres.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
          </ul>
        </div>
      </div>
      <div >
        <h3>Additional information:</h3>
        <ul >
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li >
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
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





















{/*import { useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieReviews from '../../components/MovieReviews/MovieReviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();



  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDk5NDJiOWNiOTMzMWQzYjU4MGE5YzU1NDgwMTdmNCIsInN1YiI6IjY2MTJkZTMxMDQ4NjM4MDE2MzE5NjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIQgtNvQ_0iJJPekOo952avB3e-1LwgBmjDHRulmb-w'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, [movieId]); 

  return (
    <div>
      <h1>Movie Details Page</h1>
      <MovieReviews />
      <Link to={`/movies/${movieId}/cast`}>Cast</Link> 
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link> 
    </div>
  );
};

export default MovieDetailsPage;*/}