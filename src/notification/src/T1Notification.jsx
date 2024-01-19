import "./Notification.css";

export const T1Notification = ({ children, label = 0 }) => {
	return (
		<div className="notification-container">
			{children}
			<span className="notification">{label}</span>
		</div>
	);
};
