import { T1Chip } from "./T1Chip";

export default {
	component: T1Chip,
	title: "Components/Chip",
	tags: ["autodocs"],
	argTypes: {
		onSelect: {
			control: {
				type: "function",
			},
		},
		initialState: {
			control: "boolean",
		},
	},
	parameters: {
		docs: {
			source: { language: "jsx" },
			description: {
				component:
					"Buttons are used to initialize an action, either in the background or foreground of an experience. They are used primarily in interactive areas such as: dialogs, forms, cards, and toolbars.",
			},
		},
	},
};

export const Playground = {
	args: {
		label: "Liminal Space",
		initialState: false,
		onSelect: () => {},
	},
};
