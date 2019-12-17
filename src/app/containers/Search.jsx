import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './Search.css';

import SearchTitle from '../components/search/SearchTitle';
import SearchInput from '../components/search/SearchInput';
import Filter from '../components/filter/Filter';
import SearchButton from '../components/search/SearchButton';

import * as actions from '../store/actions/movies.actions';

const Search = ({
  urlParams,
  activeFilter,
  searchValue,
  movies,
  onMovies,
  onActiveFilter,
  onSetSearchValue,
  onSearchSubmit
}) => {
  const history = useHistory();

  React.useEffect(() => {
    onMovies();
  }, []);

  React.useEffect(() => {
    if (urlParams.search) {
      onSetSearchValue(decodeURIComponent(urlParams.search));
    }
    onActiveFilter('title');
    onSearchSubmit();
  }, [movies]);

  const onSubmit = () => {
    if (searchValue) {
      console.log(`/search/${encodeURIComponent(searchValue)}`);
      history.push(`/search/${encodeURIComponent(searchValue)}`);
    }
    onSearchSubmit();
  };

  const onFilter = (e) => {
    const value = e.target.textContent.trim().toLowerCase();
    onActiveFilter(value);
  };

  return (
    <div className="search">
      <div className="search__title">
        <SearchTitle />
      </div>
      <div className="search__field">
        <div className="search__input">
          <SearchInput />
        </div>
        <div className="search__button">
          <SearchButton handleClick={onSubmit} />
        </div>
      </div>
      <div className="search__filter">
        <Filter
          title="search by"
          buttonNames={['title', 'genre']}
          handleFilter={onFilter}
          activeFilter={activeFilter}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  activeFilter: state.movies.filter,
  searchValue: state.movies.searchValue,
  movies: state.movies.movies
});

const mapDispatchToProps = dispatch => ({
  onMovies: () => dispatch(actions.getMovies()),
  onActiveFilter: (value) => dispatch(actions.setFilter(value)),
  onSetSearchValue: (value) => dispatch(actions.setSearch(value)),
  onSearchSubmit: () => dispatch(actions.searchSubmit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
