import "./T1Card.css";

export const T1Card = ({ children }) => {
	// const [backgroundColor] = useState(bgColor);
	// const [shadows, setShadows] = useState({});

	// if (!bgColor) {
	// 	 bgColor = startingHexColor(CardRef);
	// }

	// useEffect(() => {
	// 	setShadows(colorToShadows(backgroundColor));
	// }, [backgroundColor]);

	let style = {
		boxShadow: `4px 4px 8px #c9c9c9,
                 -4px -4px 8px #ededed`,
	};

	return (
		<div className="card" style={style}>
			{children}
		</div>
	);
};
