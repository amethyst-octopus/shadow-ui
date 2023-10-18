import { useState } from 'react';
import './RadioButtonGroup.css';

export const RadioButton = ({ id, name, value, label }) => {

  const [isSelected, setSelected] = useState(null);

  const onOptionChange = e => {
    setSelected(e.target.value);
  }

  return (
    <div className="radio-button">
      <input
        className="radio-state"
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isSelected === value}
        onChange={onOptionChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export const T1RadioButtonGroup = ({ name, options }) => {
  return (
    <div className="radio-button-group">
      {
        options.map(({ id, value, label }) => (
          <RadioButton
            id={id}
            value={value}
            name={name}
            label={label}
            key={label}
          ></RadioButton>
        ))
      }
    </div >
  );
}
