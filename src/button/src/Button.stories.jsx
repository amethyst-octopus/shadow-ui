import { T1Button } from "./T1Button"

export default {
	title: 'Components/Buttons',
	component: T1Button
}

export const Type_One = {
	argTypes: {
		kind: {
			options: ['primary', 'secondary'],
			control: { type: 'radio' },
		}
	},
	args: {
		text: 'Label',
		kind: 'primary'
	},
}
