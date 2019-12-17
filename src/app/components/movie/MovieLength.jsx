import React from 'react';

import './MovieLength.css';

const MovieLength = ({ length, text }) => {
  return (
    <div className="movie-length">
      <span>{length}</span>{text && <span> {text}</span>}
    </div>
  );
};

export default MovieLength;