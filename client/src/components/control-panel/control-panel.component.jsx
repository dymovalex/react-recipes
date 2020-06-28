import React from 'react';

import SearchBar from '../search-bar/search-bar.component';

import './control-panel.styles.scss';

const ControlPanel = () => {
  return (
    <div className='control-panel'>
      <SearchBar />
    </div>
  );
};

export default ControlPanel;