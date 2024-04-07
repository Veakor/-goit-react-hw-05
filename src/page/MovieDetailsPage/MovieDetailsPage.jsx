import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const location = useLocation();
  
    useEffect(() => {
      if (!movieId) return;
    }, [movieId]);
  
    const backLink = useRef(location.state?.from || '/'); 
  
    return (
      <div>
        <h1>Movie Details Page</h1>
        {/* Render movie details */}
        <Link to={backLink.current}>Go Back</Link>
      </div>
    );
  };
  

export default MovieDetailsPage;