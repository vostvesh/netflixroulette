import React from 'react';

const MovieDescription = ({ description }) => {
  return (
    <div className="movie__description">
      <span>{description}</span>
    </div>
  );
};

export default MovieDescription;