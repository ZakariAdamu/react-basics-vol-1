import React from "react";

function Header(props) {
	return (
		<div>
			<h1>Hello, {props.firstName}</h1>;
		</div>
	);
}

export default Header;
