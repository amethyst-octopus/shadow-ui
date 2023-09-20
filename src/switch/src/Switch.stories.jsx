import { Switch } from "./Switch"

export default {
  component: Switch,
  title: 'Components/Switch'
}

export const Default = {
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    }
  }
}
