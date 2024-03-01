import { T1RadioButtonGroup } from "./RadioButtonGroup";

export default {
	title: "Components/Radio Button",
	component: T1RadioButtonGroup,
	tags: ["autodocs"],
	table: {
		defaultValue: { summary: "N/A" },
	},
	parameters: {
		docs: {
			source: { language: "jsx" },
			description: {
				component:
					"Radio Buttons are used to select a single option from a list of options.",
			},
		},
	},
};

export const Playground = {
	args: {
		options: [
			{ id: "opt1", label: "Option 1", value: "opt1" },
			{ id: "opt2", label: "Option 2", value: "opt2" },
			{ id: "opt3", label: "Option 3", value: "opt3" },
		],
	},
};
