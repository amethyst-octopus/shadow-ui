import { T1Alert } from "./T1Alert";
import { Source } from "@storybook/blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { useArgs } from "@storybook/preview-api";

const component = () => {
	let [text, setText] = useState("You have 4 new notifications");

	const example = `import { T1Alert } from "@amethyst-octopus/shadow-ui/alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

<T1Alert>
	<section>
		<FontAwesomeIcon icon="exclamation-circle" />
		<span>${text}</span>
	</section>
</T1Alert>`;

	return (
		<>
			<h1>
				<b>Alert</b>
			</h1>
			<p>
				Alerts are used to display a short, important message in a way that
				attracts the user's attention without interrupting the user's task.
			</p>
			<br />
			<h2>Example</h2>
			<T1Alert>
				<section>
					<FontAwesomeIcon
						style={{ paddingRight: "10px" }}
						icon="exclamation-circle"
					/>
					<span>{text}</span>
				</section>
			</T1Alert>
			<br />
			{/* <T1TextField label="Text content" id="text" name="text" text={text} setText={setText} /> */}
			<Source code={example} />
			<h2>Props</h2>
			N/A
			<table style={{ width: "100%" }}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Default</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>children</td>
						<td>ReactNode</td>
						<td></td>
						<td>Content of the alert.</td>
					</tr>
				</tbody>
			</table>
			<h2>Reference</h2>
			<ul>
				<li>
					<a
						href="https://www.w3.org/WAI/ARIA/apg/patterns/alert/"
						target="_blank"
					>
						Accessibility
					</a>
				</li>
				<li>
					<a href="https://fontawesome.com/icons" target="_blank">
						More icons
					</a>
				</li>
			</ul>
		</>
	);
};

export default {
	title: "Components/Alert",
	tags: ["autodocs"],
	component: T1Alert,
	argTypes: {
		children: {
			table: {
				defaultValue: { summary: "N/A" },
			},
			name: "Child Components",
			options: ["Informational Example", "Warning Example", "Danger Example"],
			description: "Content of the alert. Can be a string or JSX.",
			control: {
				type: "select",
			},
			mapping: {
				"Informational Example": (
					<section>
						<FontAwesomeIcon
							icon="exclamation-circle"
							style={{ color: "blue" }}
						/>
						<span>Informational alert text here</span>
					</section>
				),
				"Warning Example": (
					<section>
						<FontAwesomeIcon icon="bell" style={{ color: "orange" }} />
						<span>Warning alert text here</span>
					</section>
				),
				"Danger Example": (
					<section>
						<FontAwesomeIcon icon="fire" style={{ color: "red" }} />
						<span>Danger alert text here</span>
					</section>
				),
			},
		},
	},
	parameters: {
		docs: {
			source: { language: "jsx" },
			description: {
				component:
					"Alerts are used to display a short, important message in a way that attracts the user's attention without interrupting the user's task.",
			},
		},
	},
};

export const Playground = {
	render: ({ children }) => {
		return <T1Alert>{children}</T1Alert>;
	},
};
