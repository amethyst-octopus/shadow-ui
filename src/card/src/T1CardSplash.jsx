import "./T1Card.css";
export const T1CardSplash = ({ src }) => {
	return (
		<div
			className="card-splash"
			style={{
				backgroundImage: `url(${src})`,
				width: "100%",
				margin: "0",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				height: "45%",
			}}
		></div>
	);
};
