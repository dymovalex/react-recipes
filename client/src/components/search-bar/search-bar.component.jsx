import React from 'react';

import './search-bar.styles.scss';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <i className="material-icons">
        search
      </i>
      <input type='text' />
    </div>
  );
};

export default SearchBar;