import { SButton } from "./SButton"

export default {
	component: SButton,
	title: 'Components/SButton'
}

export const Default = {
	argTypes: {
		kind: {
			options: ['primary', 'secondary'],
			control: { type: 'radio' },
		}
	},
	args: {
		text: 'Label',
	},
}
