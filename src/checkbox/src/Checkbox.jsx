import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Checkbox.css';

export const T1Checkbox = ({ id, initialState = false, label }) => {
	const [isChecked, setIsChecked] = useState(initialState);

	const onChange = () => {
		setIsChecked(!isChecked);
	}

	return (
		<div className="checkbox">
			<label className="checkbox-label" htmlFor={id}>
				<input
					className="checkbox-state"
					type="checkbox"
					id={id}
					onChange={() => onChange()}
					checked={isChecked}
				/>
				<span className="custom-checkbox">
					{isChecked ?
						<FontAwesomeIcon
							className="checkbox-icon"
							icon="fa-solid fa-check"
						/>
						: null}
				</span>
				<span className="label-text">{label}</span>
			</label>
		</div>
	);
}
