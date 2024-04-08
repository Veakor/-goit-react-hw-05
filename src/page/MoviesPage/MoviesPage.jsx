import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const MoviesPage = () => {
  const [showList, setShowList] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { search } = form.elements;
    if (search.value.length === 0) {
      toast.error("The input field is empty! Please write a word to search.", {
        icon: "...",
      });
    } else {
      setShowList(search.value);
    }
  };

  useEffect(() => {
    async function getListMovies() {
      if (showList.length === 0) return;
   
    }

    getListMovies();
  }, [showList]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search films and movies"
          />
          <button type="submit">Search</button>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <div>
        <ul>
          {Array.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink to={`${item.id}`}>{item.title}</NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default MoviesPage



{/*import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import axios from 'axios';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDk5NDJiOWNiOTMzMWQzYjU4MGE5YzU1NDgwMTdmNCIsInN1YiI6IjY2MTJkZTMxMDQ4NjM4MDE2MzE5NjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIQgtNvQ_0iJJPekOo952avB3e-1LwgBmjDHRulmb-w`
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

export default MoviesPage;*/}