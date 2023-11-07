// eslint-disable-next-line no-unused-vars
import { T1Button } from "../../button/src/T1Button";
import { T1Badge } from "./T1Badge";

export default {
	title: "Components/Badges",
	component: T1Badge,
};

export const Badge = {
	args: {
		badgeContent: "1",
	},
	render: (args) => (
		<T1Badge {...args}>
			<T1Button text={"Label"} />
		</T1Badge>
	),
};
