import React from 'react';

import './SearchButton.css';

const SearchButton = ({ handleClick }) => {
  return (
    <div className="search-button">
      <button
        type="submit"
        onClick={handleClick}
      >Search</button>
    </div>
  );
};

export default SearchButton;