import "./T1Card.css";

export const T1Card = ({ width = "300px", height = "450px", children }) => {
	console.log("T1Card: children: ", children);

	return (
		<div style={{ width, height }} className="card">
			{children}
		</div>
	);
};
