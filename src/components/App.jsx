import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={'<MovieDetails />'}>
          <Route path="movies/:movieId/cast" element={'<Cast />'} />
          <Route path="movies/:movieId/reviews" element={'<Reviews />'} />
        </Route>
      </Route>
    </Routes>
  );
};
