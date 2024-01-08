import { useState } from "react";
import "./TextField.css";

export const TextField = ({ label, id, name}) => {
	const [text, setText] = useState("");

	const onChange = (e) => {
		setText(e.target.value);
	};

	return (
		<div className="textField-container">
			<label className="textField-label" htmlFor={id}>{label}</label>
			<input
				className="textField"
				type="text"
				id={id}
				name={name}
				value={text}
				onChange={onChange}
			/>
		</div>
	);
};
