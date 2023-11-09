import { NavItem, Navbar } from "./Navbar";

export default {
	title: "Components/Navbar",
	component: Navbar
};

export const Type_One = {
	argTypes: {},
	render: () => (
		<Navbar>
			<NavItem item={"Logo Brand"} logo={"https://blog.hubspot.com/hubfs/image8-2.jpg"} />
			<NavItem item={"Item1"} />
			<NavItem item={"Item2"} />
		</Navbar>
	)
};
