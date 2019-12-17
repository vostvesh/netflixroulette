import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import MovieDetails from './pages/MovieDetails';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/film/:id" exact>
          <MovieDetails />
        </Route>
        <Route path="/search/:search" exact >
          <MainPage />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
