import React from 'react';

import './checkbox-input.styles.scss';

const CheckboxInput = ({ label, value, handleChange, ...otherProps }) => {
  return (
    <div className='checkbox-input'>
      <input
        type='checkbox'
        className='checkbox-input__input'
        onChange={handleChange}
        {...otherProps} 
      />
      <label className='checkbox-input__label'>
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;