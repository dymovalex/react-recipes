import React from 'react';
import PropTypes from 'prop-types';

import './card.styles.scss';

const Card = ({ recipe }) => {
  return (
    <div className='card'>
      <div className='card__image'>
        <img src='card-background.jpg' />
        <span>{recipe.name}</span>
        <i className="material-icons">add</i>
      </div>
      <div className='card__description'>{recipe.description}</div>
    </div>
  );
};

Card.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default Card;
