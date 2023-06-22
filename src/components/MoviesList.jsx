import React from 'react';
import PropTypes from 'prop-types';
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;
