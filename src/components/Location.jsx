import React from 'react';

function Location({ location }) {
	const totalResidents = location.residents.length;
	const totalResidentsText = totalResidents === 1 ? ' resident' : ' residents';
	return (
		<div className="flex flex-col items-center justify-center bg-black p-4  text-green-400">
			<h2>{location.name}</h2>
			<div className="grid grid-cols-3 gap-4">
				<p className=" ">Location:{location.type}</p>
				<p>Dimension: {location.dimension}</p>
				<p>
					Residents:
					{totalResidents}
					{totalResidentsText}
				</p>
			</div>
		</div>
	);
}

export default Location;
