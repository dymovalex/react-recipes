import React from 'react';

import CheckboxInput from '../checkbox-input/checkbox-input.component';

import './ingredient-filter.styles.scss';

const IngredinetFilter = () => {
  return (
    <div className='ingredient-filter'>
      <div className='complex-filters'>
        <CheckboxInput
          name='have-all'
          label='Have all of ingredients'
        />
        <CheckboxInput
          name='favourites'
          label='My favourites'
        />
      </div>
      <div className='filters-by-ingredients'>
      <h3>Ingredients</h3>
      <CheckboxInput
          name='лаванда'
          label='Лаванда'
      />
      <CheckboxInput
        name='мята'
        label='Мята'
      />
      <CheckboxInput
        name='иван-чай'
        label='Иван-чай'
      />
      <CheckboxInput
        name='ромашка'
        label='Ромашка'
      />
      <CheckboxInput
        name='шиповник'
        label='Шиповник'
      />
      <CheckboxInput
        name='бергамот'
        label='Бергамот'
      />
      </div>
      <div className='filters-by-purpose'>
        <h3>Purpose</h3>
        <CheckboxInput
          name='для сердця'
          label='Для сердця'
        />
        <CheckboxInput
          name='для сна'
          label='Для сна'
        />
        <CheckboxInput
          name='для посиделок'
          label='Для посиделок'
        />
        <CheckboxInput
          name='от простуды'
          label='От простуды'
        />
      </div>
    </div>
  );
};

export default IngredinetFilter;