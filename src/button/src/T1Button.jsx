import './Button.css'

export const T1Button = (props) => (
  <button data-button={`kind:${props.kind}`} {...props}>
    {props.text}
  </button>
)
