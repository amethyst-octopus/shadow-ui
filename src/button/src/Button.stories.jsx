import { T1Button } from "./T1Button";

export default {
	title: "Components/Buttons",
	component: T1Button,
};

export const Type_One = {
	argTypes: {
		onPress: {
			type: "function",
		},
	},
	args: {
		Label: "Label",
	},
};
