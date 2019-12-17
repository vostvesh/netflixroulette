import React from 'react';
import { Link } from 'react-router-dom';

import './MovieDetailsHeader.css';
import searchIcon from '../../../assets/search.svg';

import Logo from '../logo/Logo';

const MovieDetailsHeader = () => {
  return (
    <div className="movie-details-header">
      <Logo />
      <Link to='/'>
        <img src={searchIcon} alt="search icon" />
      </Link>
    </div>
  );  
};

export default MovieDetailsHeader;