import React from 'react';
import * as moment from 'moment';

import './MovieYear.css';

const MovieYear = ({ date, text }) => {
  let year = '-';
  if (date) {
    year = moment(date, 'YYYY-MM-DD').year();
  }
  return (
    <div className="movie-year">
      <span>{year}</span>{text && <span> {text}</span>}
    </div>
  );
};

export default MovieYear;