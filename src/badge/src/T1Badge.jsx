export default function T1Badge({ children, badgeContent }) {
	return (
		<div className="badge-container">
			{children}
			<span className="badge">{badgeContent}</span>
		</div>
	);
}
