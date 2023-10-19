import { useState } from 'react';
import './RadioButtonGroup.css';

export const RadioButton = ({ id, name, value, selected, label, onOptionChange }) => {

  return (
    <div className="radio-button-wrapper">
      <input
        className="radio-state"
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onOptionChange}
        checked={selected === value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export const T1RadioButtonGroup = ({ name, options }) => {
  const [selected, setSelected] = useState(null);

  const onOptionChange = (e) => {
    setSelected(e.target.value);
  }

  return (
    <div className="radio-button-group">
      {
        options.map((option) => (
          <RadioButton
            name={name}
            selected={selected}
            key={option.label}
            onOptionChange={onOptionChange}
            {...option}
          ></RadioButton>
        ))
      }
    </div >
  );
}
