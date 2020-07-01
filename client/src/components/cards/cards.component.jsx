import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';

import './cards.styles.scss';

const Cards = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await fetch('/recipes');
    
    const data = await res.json();
  
    setRecipes(data);
  };

  return (
    <div className='cards'>
      {
        recipes && recipes.map(recipe => <Card key={recipe.id} recipe={recipe} />)
      }
    </div>
  );
};

export default Cards;