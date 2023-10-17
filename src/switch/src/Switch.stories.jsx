import { T1Switch } from "./Switch"

export default {
  component: T1Switch,
  title: 'Components/Switches'
}

export const Type_One = {
  argTypes: {
    checked: {
      control: 'boolean',
    },
  },
  args: {
		checked: false,
	},
}
