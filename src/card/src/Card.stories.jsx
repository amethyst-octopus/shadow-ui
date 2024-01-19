import { T1Card } from "./T1Card";
import { T1Button } from "../../button/src/T1Button";
import { T1CardSplash } from "./T1CardSplash";
import { T1Chip } from "../../chip/src/T1Chip";
import BayBridge from "../../assets/baybridge.jpg";

export default {
	component: T1Card,
	title: "Components/Card",
	tags: ["autodocs"],
	parameters: {
		docs: {
			source: { language: "jsx" },
			description: {
				component:
					"Cards are used to group content and actions pertaining to a single subject. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.",
			},
		},
	},
};

export const Playground = {
	render: () => {
		return (
			<T1Card>
				<T1CardSplash src={BayBridge} alt="bay bridge" />
				<T1Chip
					label="Daily Topic"
					style={{
						marginTop: "1.2rem",
						marginLeft: "1rem",
					}}
					onSelect={() => {}}
				/>
				<p
					style={{
						fontSize: "1.25rem",
						fontWeight: 400,
						textAlign: "center",
						lineHeight: "1.3",
					}}
				>
					We partnered up with Apple
				</p>
				<p
					style={{
						fontSize: "1rem",
						padding: "0 1rem",
						fontWeight: 300,
						textAlign: "center",
						lineHeight: "1.6",
					}}
				>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
			</T1Card>
		);
	},
};
