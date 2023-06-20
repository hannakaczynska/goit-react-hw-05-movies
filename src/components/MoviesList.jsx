import React from 'react';
import { Link, useLocation } from 'react-router-dom'

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(movie => (
        <li key={movie.id}>
         <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
        </li>
      ))}
    </>
  );
};

export default MoviesList;
