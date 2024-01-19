import "./T1Alert.css";

export const T1Alert = ({ children }) => {
	return (
		<div role="alert" className="alert">
			{children}
		</div>
	);
};
