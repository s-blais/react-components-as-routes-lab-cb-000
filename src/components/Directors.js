import React from 'react';
import { directors } from '../data';

const directorEntry = (director, idx) => {
  return (
    <div key={ idx }>
      Name: { director.name }
      <ul>
        { director.movies.map((movie, idx) => <li key={idx}>{movie}</li>)}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directors.map((director, idx) => directorEntry(director, idx)) }
    </div>
  );
}

export default Directors
