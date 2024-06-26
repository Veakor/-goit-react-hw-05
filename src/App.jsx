import { Suspense, lazy } from "react";
import { Routes, Route} from "react-router-dom";
import Navigation from './pages/Navigation/Navigation';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"));



const App = () => {
  return (
   <>

<Navigation/>

  <div>
  <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
           <Route path="cast" element={<MovieCast />} />
           <Route path="reviews" element={<MovieReviews />} />
           </Route>
        <Route path="*" element={<NotFoundPage />} />
       </Routes>
       </Suspense>
     </div>
   </>
     
  );
};

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