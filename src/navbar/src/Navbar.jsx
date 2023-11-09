import { useState } from "react";
import "./Navbar.css";

export const NavItem = ({ item, logo=undefined, logoStyle=undefined }) => {
	return (
		<>
			{logo ? 
				<img src={logo} className="nav-brand" style={logoStyle} alt={item}></img>
				: <li className="nav-item">
					<a className="nav-link" href="#" key={item}>{item}</a>
				</li>
			}
		</>
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

