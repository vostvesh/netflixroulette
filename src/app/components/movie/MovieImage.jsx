import React from 'react';

import './MovieImage.css';

const MovieImage = ({imageSource}) => {
  return (
    <div className="movie-image">
      <img src={imageSource} alt="movie" />
    </div>
  );
};

export default MovieImage;