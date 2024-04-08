import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import MoviesPage from './page/MoviesPage/MoviesPage';
import MovieDetailsPage from './page/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/movies" element={<MoviesPage/>} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage/>} />
          <Route element={<NotFoundPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;