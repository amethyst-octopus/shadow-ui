import "./T1Alert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const T1Alert = ({
	icon,
	children,
	alertStyle,
	iconStyle,
	childStyle,
}) => {
	return (
		<div role="alert" className="alert" style={{ ...alertStyle }}>
			{icon ? (
				<FontAwesomeIcon
					style={{ paddingRight: "10px", ...iconStyle }}
					icon={icon}
				/>
			) : null}
			<div className="alert-inner-text" style={{ ...childStyle }}>
				{children}
			</div>
		</div>
	);
};
