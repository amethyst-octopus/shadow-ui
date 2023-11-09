import { useState } from "react";
import "./Navbar.css";

export const Navbar = ({ brand, items }) => {

	return (
		<nav className="nav-navbar">
			<span className="nav-brand">
				<a className="nav-link" href="/">{brand}</a>
			</span>
			<span className="nav-item-container">
				<ul className="nav-items">
					{items?.map(item =>
						<li className="nav-item">
							<a className="nav-link" href="#" key={item}>{item}</a>
						</li>
					)}
				</ul>
			</span>
		</nav>
	);
};
