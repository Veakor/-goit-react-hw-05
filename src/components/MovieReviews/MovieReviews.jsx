import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../servic/API";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDk5NDJiOWNiOTMzMWQzYjU4MGE5YzU1NDgwMTdmNCIsInN1YiI6IjY2MTJkZTMxMDQ4NjM4MDE2MzE5NjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIQgtNvQ_0iJJPekOo952avB3e-1LwgBmjDHRulmb-w'
          }
        };
        const data = await getMovieReviews(movieId, options);
        setMovieReviews(data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  if (loading) return <div>Loading reviews...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {movieReviews.length === 0 ? (
        <div>No reviews available for this movie.</div>
      ) : (
        <ul>
          {movieReviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;

















































{/*import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { getMovieReviews } from "..//../servic/API";

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function getInfoMovieReviews() {
      try {
        const data = await getMovieReviews(moviesId);
        setMovieReviews(data.results);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        console.log();
      }
    }

    getInfoMovieReviews();
  }, [moviesId]);

  return (
    <div>
      {movieReviews.length === 0 ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        <ul >
          {Array.isArray(movieReviews) &&
            movieReviews.map((item) => {
              return (
                <li key={item.id}>
                  <h3>{item.author}</h3>
                  <p>{item.content}</p>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};
export default MovieReviews;*/}




{/*import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ReviewsPage = () => {
    const { movieId } = useParams();
  
    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDk5NDJiOWNiOTMzMWQzYjU4MGE5YzU1NDgwMTdmNCIsInN1YiI6IjY2MTJkZTMxMDQ4NjM4MDE2MzE5NjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIQgtNvQ_0iJJPekOo952avB3e-1LwgBmjDHRulmb-w'
        }
      };
  
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }, [movieId]);
  
    return null; 
}
  
export default ReviewsPage;*/}