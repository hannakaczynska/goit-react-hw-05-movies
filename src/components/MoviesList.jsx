import React from 'react';

const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
          <li key={movie.id}>{ movie.title }</li>
      ))}
    </>
  );
};

export default MoviesList;
