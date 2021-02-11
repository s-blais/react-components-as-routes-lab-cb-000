import React from 'react';
import { movies } from '../data';

const movieEntry = (movie, idx) => {
  return (
    <div key={ idx }>
      Title: { movie.title }
      <br/>
      Time: { movie.time }
      <ul>
        { movie.genres.map((genre, idx) => <li key={idx}>{genre}</li>)}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        { movies.map((movie, idx) => movieEntry(movie, idx)) }
    </div>
  );
};

export default Movies;
