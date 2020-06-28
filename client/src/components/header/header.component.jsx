import React from 'react';

import './header.styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='blank'></div>
      <div className='logo'>
        <i className='material-icons logo__symbol'>eco</i>
        <span className='logo__name'>Herbal Recipes</span>
      </div>
      <div className='links'>
        <ul className='links__list'>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
