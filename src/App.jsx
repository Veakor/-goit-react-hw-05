import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import MoviesPage from './page/MoviesPage/MoviesPage';
import MovieDetailsPage from './page/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import style from "./App.module.css";

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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;