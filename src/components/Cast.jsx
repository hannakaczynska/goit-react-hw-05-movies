import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const movieCastURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${apiKey}`;
    const fetchMovieCast = async () => {
      try {
        const response = await fetch(movieCastURL);
        const movieCast = await response.json();
        const mainCast = movieCast.cast.slice(0, 15);
        setCast(mainCast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {cast.length === 0 ? (
        <p>We don't have any cast for this movie.</p>
      ) : (
        <CastList>
          {cast.map((c, index) => (
            <li key={index}>
              {c.profile_path !== null ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${c.profile_path}`}
                  alt={c.name}
                  width={150}
                />
              ) : (
                <p></p>
              )}
              <p>{c.name}</p>
              <p>Charakter: {c.character}</p>
            </li>
          ))}
        </CastList>
      )}
    </>
  );
};

export default Cast;
