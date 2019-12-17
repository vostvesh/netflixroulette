import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Movie.css';

import * as actions from '../store/actions/movies.actions';
import MovieImage from '../components/movie/MovieImage';
import MovieTitle from '../components/movie/MovieTitle';
import MovieTag from '../components/movie/MovieTag';
import MovieYear from '../components/movie/MovieYear';
import MovieVote from '../components/movie/MovieVote';
import MovieDescription from '../components/movie/MovieDescription';
import MovieLength from '../components/movie/MovieLength';

const Movie = (props) => {
  const { onMovie, id, movie } = props;
  const { title, release_date, poster_path, overview, vote_average, runtime, tagline } = movie;

  React.useEffect(() => {
    onMovie(id);
  }, [id]);
  console.log(movie)

  return (
    <div className="movie">
      <div className="movie__bg">
        <div className="movie__image">
          <MovieImage imageSource={poster_path} />
        </div>
        <div className="movie__content">
          <div className="movie__title">
            <MovieTitle title={title} />
            <MovieVote vote={vote_average} />
          </div>
          <div className="movie__tag">
            <MovieTag content={tagline} />
          </div>
          <div className="movie__info">
            <MovieYear date={release_date} text="year" />
            <MovieLength length={runtime} text="min" />
          </div>
          <div className="movie__description">
            <MovieDescription description={overview} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  movie: state.movies.movie
});

const mapDispatchToProps = dispatch => ({
  onMovie: (id) => dispatch(actions.getMovie(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));
