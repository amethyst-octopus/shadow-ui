import { NavItem, Navbar } from "./Navbar";

export default {
	title: "Components/Navbar",
	component: Navbar
};

export const Type_One = {
	argTypes: {},
	render: () => (
		<Navbar brand={"Brand"}>
			<NavItem item={"item1"} />
			<NavItem item={"item2"} />
		</Navbar>
	),
};
