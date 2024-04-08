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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={NotFoundPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;