import './Switch.css'

export const Switch = (props) => (
    <div class="switch">
      <input class="switch-state" type="checkbox" {...props} />
      <div class="indicator"></div>
    </div>
)
