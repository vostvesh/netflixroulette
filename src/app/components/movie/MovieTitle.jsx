import React from 'react';

import './MovieTitle.css';

const MovieTitle = ({ title }) => {
  return (
    <div className="movie-title">
      <h4>{title}</h4>
    </div>
  );
};

export default MovieTitle;