import React from 'react';

function Errors({ error }) {
	return (
		<div className="flex flex-col items-center justify-center h-screen backdrop-blur-md bg-white/10 rounded-xl">
			<h1 className=" font-bold text-red-500 text-center">
				There has been an error trying to access the information you request
			</h1>
			<p className="">{error}</p>
		</div>
	);
}

export default Errors;
