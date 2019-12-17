import * as actionTypes from './types';

const baseUrl = 'https://reactjs-cdp.herokuapp.com';

export const getMovies = () => {
  return dispatch => {
    fetch(`${baseUrl}/movies`)
      .then(response => response.json())
      .then(data => dispatch({ type: actionTypes.GET_MOVIES, payload: data.data }))
      .catch(error => dispatch(error))
  };
};

export const getMovie = (id) => {
  return dispatch => {
    fetch(`${baseUrl}/movies/${id}`)
      .then(response => response.json())
      .then(data => dispatch({
        type: actionTypes.GET_MOVIE,
        payload: data
      }))
      .catch(error => dispatch(error));
  };
};

export const setSearch = (value) => {
  return {
    type: actionTypes.SET_SEARCH,
    payload: value
  }
}

export const searchMovie = () => {
  return {
    type: actionTypes.SEARCH_MOVIE
  };
};

export const searchSubmit = () => {
  return {
    type: actionTypes.SEARCH_SUBMIT
  }
};

export const setFilter = (value) => {
  return {
    type: actionTypes.SET_FILTER,
    payload: value
  }
};

export const setSortFilter = (value) => {
  return {
    type: actionTypes.SET_SORT_FILTER,
    payload: value
  }
};
