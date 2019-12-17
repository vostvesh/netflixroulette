import * as moment from 'moment';
import * as actionTypes from '../actions/types';

import { updateObject } from '../utility';

const initialState = {
  movies: [],
  filteredMovies: [],
  movie: {},
  searchValue: '',
  filter: '',
  sort: ''
};

const sortMovies = (movies, filterName) => {
  let sortedMovies = [];
  if (filterName === 'release date') {
    const sortFilter = 'release_date';
    sortedMovies = movies.sort((a, b) => {
      const aValue = a[sortFilter];
      const bValue = b[sortFilter];
      const aDate = new moment(aValue, 'YYYY-MM-DD');
      const bDate = new moment(bValue, 'YYYY-MM-DD');
      return bDate - aDate;
    });
  } else if (filterName === 'rating') {
    const sortFilter = 'vote_average';
    sortedMovies = movies.sort((a, b) => {
      return b[sortFilter] - a[sortFilter];
    });
  }
  return sortedMovies;
};

const filterMovies = (movies, filterName, filterValue, sortFilterName) => {
  let filteredMovies = [];
  if (filterName === 'genre') {
    filteredMovies = movies.filter(movie => {
      return movie['genres'].some(item => {
        return item.toLowerCase().includes(filterValue);
      });
    })
  } else {
    filteredMovies = movies.filter(movie => {
      return movie[filterName].toLowerCase().includes(filterValue);
    })
  }
  filteredMovies = sortMovies(filteredMovies, sortFilterName);
  return filteredMovies;
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_MOVIES:
      return updateObject(state, { movies: action.payload });
    case actionTypes.GET_MOVIE:
      return updateObject(state, { movie: action.payload });
    case actionTypes.SET_SEARCH:
      return updateObject(state, { searchValue: action.payload });
    case actionTypes.SEARCH_SUBMIT:
      const movies = [...state.movies];
      const { filter, searchValue } = state;
      const updatedFilter = filter.length ? filter.toLowerCase() : filter;
      const updatedSearchValue = searchValue.length ? searchValue.toLowerCase() : searchValue;
      const sortFilterName = state.sort;
      const filteredMovies = filterMovies(movies, updatedFilter, updatedSearchValue, sortFilterName);
      return updateObject(state, { filteredMovies });
    case actionTypes.SET_FILTER:
      return updateObject(state, { filter: action.payload });
    case actionTypes.SET_SORT_FILTER:
      const initialMovies = [...state.filteredMovies];
      const filterName = action.payload;
      const sortedMovies = sortMovies(initialMovies, filterName);
      return updateObject(state, { sort: action.payload, filteredMovies: sortedMovies });
    default:
      return state;
  }
};

export default reducer;
