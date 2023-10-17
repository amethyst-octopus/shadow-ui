import { useState } from 'react';
import './Button.css';

export const T1Button = ({text, onPress, style, additionalDirectives}) => {

  const [isFocused, setFocus] = useState(false);

  const handleClick = (e) => {
    setFocus(true);
    if (onPress)
      onPress();
  }

  return (
    <button
      onMouseLeave={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onClick={handleClick}
      tabIndex={0} 
      className={isFocused ? 'button button-focus' : 'button'}
      style={style}
      {...additionalDirectives}>
      {text}
    </button>
  );
};
