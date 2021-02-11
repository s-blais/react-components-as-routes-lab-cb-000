import React from 'react';
import { actors } from '../data';

const actorEntry = (actor, idx) => {
  return (
    <div key={ idx }>
      Name: { actor.name }
      <ul>
        { actor.movies.map((movie, idx) => <li key={idx}>{movie}</li>)}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { actors.map((actor, idx) => actorEntry(actor, idx)) }
    </div>
  );
};

export default Actors;
