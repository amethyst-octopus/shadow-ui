import { T1Button } from "./T1Button";

export default {
	title: "Components/Button",
	component: T1Button,
	tags: ["autodocs"],
	table: {
		defaultValue: { summary: "N/A" },
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
	argTypes: {
		onPress: {
			type: "function",
			description: "Function to execute on press.",
		},
	},
	args: {
		label: "Label",
	},
};
