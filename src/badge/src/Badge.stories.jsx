import { T1Button } from "./T1Badge";

export default {
	title: "Components/T1Badge",
	component: T1Button,
};

export const Type_One = {
	argTypes: {
		onPress: {
			type: "function",
		},
	},
	args: {
		text: "Label",
	},
};
