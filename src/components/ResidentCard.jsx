import React, { useEffect, useState } from 'react';
import { useFetchAPI } from '../hooks/useFetchAPI';

function ResidentCard({ url }) {
	const { fetchingData, data: resident, loading } = useFetchAPI();
	const [characters, setCharacters] = useState([url.length]);
	useEffect(() => {
		console.log(url);
		fetchingData(url);
	}, [url]);

	if (loading) return <h1>Loading...</h1>;
	if (!resident) return <h1>Resident not found</h1>;
	return (
		<div className="flex flex-col  bg-black p-4 rounded-lg shadow-md text-white gap-2">
			<img src={resident?.image} alt={resident?.name} />
			<h2 className="align-center text-center text-lg font-bold ">
				{resident?.name}
			</h2>
			<div className="w-full h-1 bg-white mb-4 rounded"></div>

			<p>
				<b>-</b>Status: {resident?.status}
			</p>
			<p>
				<b>-</b>Species: {resident?.species}
			</p>
			<p>
				<b>-</b>Origin:{resident?.origin?.name}
			</p>
			<p>
				<b>-</b>Eppisodes: {resident?.episode.length}{' '}
			</p>
		</div>
	);
}

export default ResidentCard;
