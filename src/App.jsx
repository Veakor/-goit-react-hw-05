import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import MoviesPage from './page/MoviesPage/MoviesPage';
import MovieDetailsPage from './page/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';


const App = () => {
  return (
    <Router>
      <div>
        {}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;