import React from 'react';
import img from '../assets/headerimg.png';

function Header() {
	return (
		<div>
			<img
				className="w-full h-auto object-cover"
				src={img}
				alt="Rick and Morty"
				title="Rick And Morty"
			/>
		</div>
	);
}

export default Header;
