import { useState } from "react";
import "./Navbar.css";

export const NavItem = ({item}) => {
	return (
		<li className="nav-item">
			<a className="nav-link" href="#" key={item}>{item}</a>
		</li>
	);
};

export const Navbar = ({ brand, children }) => {
	return (
		<nav className="nav-navbar">
			<span className="nav-brand">
				<a className="nav-link" href="/">{brand}</a>
			</span>
			<span className="nav-item-container">
				<ul>
					{children}
				</ul>
			</span>
		</nav>
	);
};

