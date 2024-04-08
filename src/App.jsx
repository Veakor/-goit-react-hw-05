import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import MoviesPage from "./page/MoviesPage/MoviesPage";
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import MovieDetailsPage from "./page/MovieDetailsPage/MovieDetailsPage";


function App() {
  return (
  
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
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