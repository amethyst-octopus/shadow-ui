import { T1Alert } from "./T1Alert";

export default {
	title: "Components/Alert",
	component: T1Alert,
};

export const Type_One = {
	args: {
		children: "Hello this is a child element",
	},
	argTypes: {
		icon: {
			options: ["exclamation-circle", "thumbs-up", "bell", "fire", "none"],
			control: {
				type: "select",
				labels: {
					"exclamation-circle": "info",
					"thumbs-up": "positive",
					bell: "alert",
					fire: "warning",
					none: null,
				},
			},
		},
	},
};
