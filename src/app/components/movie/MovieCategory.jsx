import React from 'react';

import './MovieCategory.css';

const MovieCategory = ({ category }) => {
  return (
    <div className="movie-category">
      <span>{category}</span>
    </div>
  );
};

export default MovieCategory;