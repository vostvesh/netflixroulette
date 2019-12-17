import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/header/Header';
import MovieList from '../containers/MovieList';
import Footer from '../components/footer/Footer';

const Main = () => {
  const { search } = useParams();
  return (
    <>
      <Header urlParams={{ search }} />
      <MovieList />
      <Footer />
    </>
  );
};

export default Main;
