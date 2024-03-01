import { T1TextField } from "./TextField";

export default {
	title: "Components/TextField",
	component: T1TextField,
	tags: ["autodocs"],
	parameters: {
		docs: {
			source: { language: "jsx" },
			description: {
				component:
					"Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.",
			},
		},
	},
};

export const Type_One = {
	args: {
		label: "First Name",
		id: "firstName",
		name: "firstName",
	},
};
