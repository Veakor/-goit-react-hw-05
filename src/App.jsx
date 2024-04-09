import {BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';


function App() {
  return (
    
    <Router>
      <div>
        <header>
          <nav >
          <NavLink  to='/'>Home</NavLink>
          <NavLink  to="/movies">Movies</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;






{/*import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import MoviesPage from './page/MoviesPage/MoviesPage';
import MovieDetailsPage from './page/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import style from "./App.module.css";
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav className={style.nav}>
          <NavLink className={style.getNavlinkClassname} to='/'>Home</NavLink>
          <NavLink className={style.getNavlinkClassname} to="/movies">Movies</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<MovieCast />} /> 
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/}