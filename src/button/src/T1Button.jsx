import './Button.css';

export const T1Button = (props) => (
  <button className={`button ${props.kind}`} {...props}>
    {props.text}
  </button>
);
