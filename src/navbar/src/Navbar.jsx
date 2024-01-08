import "./Navbar.css";

export const NavItem = ({ label, url, logo = undefined, logoStyle = undefined }) => {
	return (
		<span className={logo ? "nav-brand" : "nav-item"}>
			<a className="nav-link" href={url}>
				{logo ?
					<img src={logo} className="nav-brand-logo" style={logoStyle} alt={`${label}-logo`}></img>
					: label
				}
			</a>
		</span>
	);
};

export const Navbar = ({ children }) => {
	return (
		<nav className="nav-navbar">
			<div className="nav-item-container">
				{children}
			</div>
		</nav>
	);
};
