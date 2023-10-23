import { useState } from 'react';
import './RadioButtonGroup.css';

export const RadioButton = ({ id, name, value, selected, label, onChange }) => {
  return (
    <div className="radio">
      <label className="radio-label" htmlFor={id}>
        <input
          className="radio-state"
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          checked={selected === value}
        />
        <span className="custom-radio"></span>
        <span className="label-text">{label}</span>
      </label>
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
            onChange={onOptionChange}
            {...option}
          ></RadioButton>
        ))
      }
    </div >
  );
}
