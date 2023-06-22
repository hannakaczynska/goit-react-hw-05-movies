import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));

export const App = () => {

  return (
    <>
      <BrowserRouter basename="/goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/> } />
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
};
