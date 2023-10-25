import { T1Badge } from "./T1Badge";

export default {
	title: "Components/Badges",
	component: T1Badge,
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
