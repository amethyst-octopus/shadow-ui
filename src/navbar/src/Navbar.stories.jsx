import { Navbar, NavItem } from "./Navbar";

export default {
	title: "Components/Navbar",
	component: Navbar,
	tags: ["autodocs"],
	table: {
		defaultValue: { summary: "N/A" },
	},
	parameters: {
		docs: {
			source: { language: "jsx" },
			description: {
				component:
					"Navigation bars are used for navigating between pages of an app. They are persistent and consistent, and are used to help the user find their way around an app.",
			},
		},
	},
};

export const Playground = {
	render: () => (
		<Navbar>
			<NavItem
				label={"AppName"}
				url={"#"}
				logo={"https://blog.hubspot.com/hubfs/image8-2.jpg"}
			/>
			<NavItem label={"Item1"} url={"#"} />
			<NavItem label={"Item2"} url={"#"} />
		</Navbar>
	),
};
