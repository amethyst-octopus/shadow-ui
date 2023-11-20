import { Navbar, NavItem } from "./Navbar";

export default {
	title: "Components/Navbar",
	component: Navbar
};

export const Type_One = {
	argTypes: {},
	render: () => (
		<Navbar>
			<NavItem label={"AppName"} url={"#"} logo={"https://blog.hubspot.com/hubfs/image8-2.jpg"} />
			<NavItem label={"Item1"} url={"#"}/>
			<NavItem label={"Item2"} url={"#"}/>
		</Navbar>
	)
};
