import React from 'react';

import './Filter.css';

const Filter = ({ title, buttonNames, activeFilter, handleFilter }) => {
  const leftFilterName = buttonNames[0];
  const rightFilterName = buttonNames[1];
  const isActive = leftFilterName === activeFilter;

  return (
    <div className="filter">
      <div className="filter__title">
        <span>{title}</span>
      </div>
      <div className="filter__buttons">
        <button
          onClick={handleFilter}
          className={isActive ? 'active': ''}
        >{leftFilterName}</button>
        <button
          onClick={handleFilter}
          className={!isActive ? 'active': ''}
        >{rightFilterName}</button>
      </div>
    </div>
  );
};

export default Filter;