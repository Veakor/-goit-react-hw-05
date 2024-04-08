// Ключ API - 909942b9cb9331d3b580a9c5548017f4
// Ключ доступа к API - eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDk5NDJiOWNiOTMzMWQzYjU4MGE5YzU1NDgwMTdmNCIsInN1YiI6IjY2MTJkZTMxMDQ4NjM4MDE2MzE5NjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIQgtNvQ_0iJJPekOo952avB3e-1LwgBmjDHRulmb-w

import axios from "axios";

export async function getSearchMovies(search) {
  if (search.length === 0) return;

  const url = `https://api.themoviedb.org/3/search/movie?query=${search}`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDk5NDJiOWNiOTMzMWQzYjU4MGE5YzU1NDgwMTdmNCIsInN1YiI6IjY2MTJkZTMxMDQ4NjM4MDE2MzE5NjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIQgtNvQ_0iJJPekOo952avB3e-1LwgBmjDHRulmb-w",
    },
  };

  const res = await axios.get(url, options);
  if (res.data.results.length === 0) {
    throw new Error("Error!");
  } else {
    return res.data.results;
  }
}

export async function getTrendMovies() {
  const url = `https://api.themoviedb.org/3/trending/movie/day`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDk5NDJiOWNiOTMzMWQzYjU4MGE5YzU1NDgwMTdmNCIsInN1YiI6IjY2MTJkZTMxMDQ4NjM4MDE2MzE5NjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIQgtNvQ_0iJJPekOo952avB3e-1LwgBmjDHRulmb-w",
    },
  };

  const res = await axios.get(url, options);
  if (res.data.results.length === 0) {
    throw new Error("Error!");
  } else {
    return res.data.results;
  }
}

export async function getDetailsMovies(moviesId) {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDk5NDJiOWNiOTMzMWQzYjU4MGE5YzU1NDgwMTdmNCIsInN1YiI6IjY2MTJkZTMxMDQ4NjM4MDE2MzE5NjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIQgtNvQ_0iJJPekOo952avB3e-1LwgBmjDHRulmb-w",
    },
  };

  const res = await axios.get(url, options);
  if (res.data.length === 0) {
    throw new Error("Error!");
  } else {
    return res.data;
  }
}

export async function getMovieCast(moviesId) {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}/credits`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDk5NDJiOWNiOTMzMWQzYjU4MGE5YzU1NDgwMTdmNCIsInN1YiI6IjY2MTJkZTMxMDQ4NjM4MDE2MzE5NjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIQgtNvQ_0iJJPekOo952avB3e-1LwgBmjDHRulmb-w",
    },
  };

  const res = await axios.get(url, options);
  if (res.data.length === 0) {
    throw new Error("Error!");
  } else {
    return res.data;
  }
}

export async function getMovieReviews(moviesId) {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}/reviews`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDk5NDJiOWNiOTMzMWQzYjU4MGE5YzU1NDgwMTdmNCIsInN1YiI6IjY2MTJkZTMxMDQ4NjM4MDE2MzE5NjY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aIQgtNvQ_0iJJPekOo952avB3e-1LwgBmjDHRulmb-w",
    },
  };

  const res = await axios.get(url, options);
  if (res.data.length === 0) {
    throw new Error("Error!");
  } else {
    return res.data;
  }
}