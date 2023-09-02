import './Button.css'

export const SButton = (props) => (
  <button data-button={`kind:${props.kind}`} {...props}>
    {props.text}
  </button>
)
