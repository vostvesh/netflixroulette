import React from 'react';

import './MovieTag.css';

const MovieTag = ({ content }) => {
  return (
    <div className="movie-tag">
      <span>{content}</span>
    </div>
  );
};

export default MovieTag;