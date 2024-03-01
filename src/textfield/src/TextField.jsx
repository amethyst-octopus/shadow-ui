import { useState } from "react";
import "./TextField.css";

export const T1TextField = ({ label, id, name, text, setText, onChange }) => {
	const handleChange = (e) => {
		if (onChange) onChange(e);
		setText(e.target.value);
	};

	return (
		<div className="textField-container">
			<label className="textField-label" htmlFor={id}>
				{label}
			</label>
			<input
				className="textField"
				type="text"
				id={id}
				name={name}
				value={text}
				onChange={handleChange}
			/>
		</div>
	);
};
