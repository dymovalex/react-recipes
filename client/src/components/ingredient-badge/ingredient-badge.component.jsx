import React from 'react';

import './ingredient-badge.styles.scss';

const IngredientBadge = ({ ingredient }) => {
    return (
        <div className='ingredient-badge'>
            <span>{ingredient}</span>
        </div>
    );
};

export default IngredientBadge;