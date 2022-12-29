import React from "react";
import "./Components.scss";
import { FaHome } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";

import Logo from "../Images/crypto-logo.png";
export default function Navbar() {
	return (
		<>
			<div className="navbarContainer">
				<img src={Logo} alt="navbarContainer--logo" />
				<div className="navbarContainer--content">
					<FaHome className="navbarContainer---icons" />
					<AiOutlineFileSearch className="navbarContainer---icons" />
				</div>
			</div>
		</>
	);
}
