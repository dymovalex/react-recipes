import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import IngredientBadge from '../ingredient-badge/ingredient-badge.component';

import './card.styles.scss';

const Card = ({ recipe }) => {
  const [recipeIsOpen, setRecipeIsOpen] = useState(false);

  const handleClickRevealButton = () => {
    setRecipeIsOpen(!recipeIsOpen);
  }

  return (
    <div className='card'>
      <div className='image'>
        <h3 className='image__name'>{recipe.name}</h3>
        <a href='#!' className='image__button'>
          <i className='material-icons'>star_border</i>
        </a>
      </div>
      <div className='description'>
        <span>{recipe.description}</span>
        <a href='#!' className={'description__reveal-button'} onClick={handleClickRevealButton}>
          <i className='material-icons'>more_vert</i>
        </a>
      </div>
      <div className={`recipe ${recipeIsOpen && 'open'}`}>
        <a className={'recipe__reveal-button'} onClick={handleClickRevealButton}>
          <i className='material-icons'>clear</i>
        </a>
        <span>{recipe.method}</span>
        <div className='recipe__ingredients-badges'>
          {
            recipe.ingredients.map((ingredient, index) => <IngredientBadge key={index} ingredient={ingredient} />)
          }
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default Card;
