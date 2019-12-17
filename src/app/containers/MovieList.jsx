import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useParams } from 'react-router-dom';

import './MovieList.css';

import * as actions from '../store/actions/movies.actions';

import MovieHeader from '../components/movie/MovieHeader';
import MovieItem from '../components/movie/MovieItem';

const MovieList = (props) => {
  const { filteredMovies, activeSortFilter, onSortMovies } = props;

  React.useEffect(() => {
    onSortMovies('release date');
  }, []);

  const onActiveFilter = (e) => {
    const value = e.target.textContent.trim().toLowerCase();
    onSortMovies(value);
  }

  return (
    <div className="movie-list">
      <div className="movie-list__header">
        <MovieHeader moviesCount={filteredMovies.length} onFilter={onActiveFilter} activeFilter={activeSortFilter} />
      </div>
      <div className="movie-list__items">
        {filteredMovies.length ?
        (filteredMovies.map(({ id, title, poster_path, release_date, genres }) => (
          <div key={id} className="movie-list__item">
            <Link to={`/film/${id}`}>
              <MovieItem
                id={id}
                imageSource={poster_path}
                title={title}
                date={release_date}
                category={genres.join(' & ')}
              />
            </Link>
          </div>
        ))) :
        <h1>No movies found</h1>}
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  filteredMovies: state.movies.filteredMovies,
  activeSortFilter: state.movies.sort
});

const mapDispatchToProps = dispatch => ({
  onSortMovies: (value) => dispatch(actions.setSortFilter(value))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList));
