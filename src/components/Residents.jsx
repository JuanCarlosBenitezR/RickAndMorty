import React from 'react';
import ResidentCard from './ResidentCard';

function Residents({ residents }) {
	return (
		<div className="grid grid-cols-3 gap-4  p-4 rounded-lg shadow-md ">
			{residents.map((resident) => (
				<ResidentCard key={resident} url={resident} />
			))}
			{residents.length === 0 && <p>No residents found</p>}
		</div>
	);
}

export default Residents;
