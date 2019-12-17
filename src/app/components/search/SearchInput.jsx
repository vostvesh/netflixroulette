import React from 'react';
import { connect } from 'react-redux';

import './SearchInput.css';

import * as actions from '../../store/actions/movies.actions';

const SearchInput = ({ onInputChange, inputValue }) => {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        value={inputValue}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  inputValue: state.movies.searchValue
});

const mapDispatchToProps = dispatch => ({
  onInputChange: (value) => dispatch(actions.setSearch(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);