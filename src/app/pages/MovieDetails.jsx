import React from 'react';
import { useParams } from 'react-router-dom';

import MovieDetailsHeader from '../components/movie/MovieDetailsHeader';
import Movie from '../containers/Movie';
import Footer from '../components/footer/Footer';

const MovieDetails = () => {
  const { id } = useParams();
  return (
    <>
      <MovieDetailsHeader />
      <Movie id={id} />
      <Footer />
    </>
  );
};

export default MovieDetails;
