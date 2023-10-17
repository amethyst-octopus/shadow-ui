import { T1Chip } from "./T1Chip"

export default {
  component: T1Chip,
  title: 'Components/Chips',
  expanded: true,
  argTypes: {
    onSelect: {
      control: {
        type: 'function'
      }
    },
    initialState: {
      control: 'boolean'
    }
  }
}

export const Type_One = {
    args: {
		  label: 'Liminal Space',
      initialState: false,
		  onSelect: () => {}
	  },
}
