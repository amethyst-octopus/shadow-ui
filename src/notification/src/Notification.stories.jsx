import { T1Button } from "../../button/src/T1Button";
import { T1Notification } from "./T1Notification";
import { Meta, Source } from "@storybook/blocks";

export default {
	title: "Components/Notification",
	tags: ["autodocs"],
	component: T1Notification,
	children: {
		table: {
			defaultValue: { summary: "N/A" },
		},
		control: {
			type: "number",
		},
		name: "Child Components",
		options: ["Button", "Icon Example"],
		description: "Content of the notification. Can be a string or JSX.",
	},
	parameters: {
		docs: {
			source: { language: "jsx" },
			description: {
				component:
					"Notifications are used to display a small numerical value on top of an icon.",
			},
		},
	},
};

export const Playground = {
	render: () => {
		return (
			<T1Notification label={3}>
				<T1Button label="Label" />
			</T1Notification>
		);
	},
};
