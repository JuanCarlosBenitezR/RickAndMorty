import React from 'react';

function Location({ location }) {
	const totalResidents = location.residents.length;
	const totalResidentsText = totalResidents === 1 ? ' resident' : ' residents';
	return (
		<div className="flex flex-col items-center justify-center bg-[#082227] p-4  text-green-400">
			<h2 className="mb-5">{location.name}</h2>
			<div className="grid grid-cols-3 gap-4 text-pretty">
				<p className="px-1">
					Location: <span>{location.type}</span>
				</p>
				<p className="px-1">
					Dimension:<span> {location.dimension}</span>
				</p>
				<p className="px-1">
					Residents:
					<span>
						{totalResidents}
						{totalResidentsText}
					</span>
				</p>
			</div>
		</div>
	);
}

export default Location;
