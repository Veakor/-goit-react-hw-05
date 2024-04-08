const MovieList = ({ movies }) => {
    return (
      <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MovieList;