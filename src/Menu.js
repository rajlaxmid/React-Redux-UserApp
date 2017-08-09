import React from 'react';
import { Link } from 'react-router';

const Menu = () => {
	return(
		<div>
			<Link to="/home">Home</Link>
			<Link to="/userlist">User List</Link>
			<Link to="/about">About</Link>
		</div>
	)
}

export default Menu;