import React, { useState } from 'react';

import SearchBar from '../search-bar/search-bar.component';
import IngredientFilter from '../ingredient-filter/ingredient-filter.component';

import './control-panel.styles.scss';

const ControlPanel = () => {
  const [ingredientFilterIsClosed, setIngredientFilterIsClosed] = useState(true);

  const handleClick = () => {
    setIngredientFilterIsClosed(!ingredientFilterIsClosed);
  };

  return (
    <div className='control-panel'>
      <SearchBar />
      <div className='control-panel__filter'>
        {
          !ingredientFilterIsClosed && <IngredientFilter />
        }
        <button  onClick={handleClick}><i className="material-icons">filter_alt</i></button>
      </div>
      <div className='control-panel__view'>
        <button><i className='material-icons'>view_headline</i></button>
      </div>
    </div>
  );
};

export default ControlPanel;