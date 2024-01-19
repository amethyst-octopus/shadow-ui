import { T1Switch } from "./Switch";

export default {
	component: T1Switch,
	title: "Components/Switch",
	tags: ["autodocs"],
	parameters: {
		docs: {
			source: { language: "jsx" },
			description: {
				component:
					"Sliders allow users to make selections from a range of values.",
			},
		},
	},
};

export const Playground = {
	argTypes: {
		checked: {
			control: "boolean",
		},
	},
	args: {
		checked: false,
	},
};
