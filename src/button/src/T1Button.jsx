import './Button.css';

export const T1Button = (props) => (
  <button className="button" {...props}>
    {props.text}
  </button>
);
