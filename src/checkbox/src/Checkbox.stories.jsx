import { T1Checkbox } from "./Checkbox";

export default {
	title: "Components/Checkbox",
	component: T1Checkbox,
	tags: ["autodocs"],
	table: {
		defaultValue: { summary: "N/A" },
	},
	parameters: {
		docs: {
			source: { language: "jsx" },
			description: {
				component:
					"Checkboxes allow the user to select one or more items from a set. Checkboxes can also be used to turn an option on or off.",
			},
		},
	},
	argTypes: {
		initialState: {
			control: "boolean",
		},
	},
};

export const Playground = {
	args: {
		label: "Checkbox label",
		initialState: false,
	},
};
