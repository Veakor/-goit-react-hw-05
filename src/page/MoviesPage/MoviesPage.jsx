import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState(''); 

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/movies?query=${searchQuery}`);
  };

  return (
    <div>
      <h1>Movies Page</h1>
      {/* Search form component */}
    </div>
  );
};

export default MoviesPage;
