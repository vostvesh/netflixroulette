import React from 'react';

import './MovieVote.css';

const MovieVote = ({ vote }) => {
  return (
    <div className="movie-vote">
      <span>{vote}</span>
    </div>
  );
};

export default MovieVote;