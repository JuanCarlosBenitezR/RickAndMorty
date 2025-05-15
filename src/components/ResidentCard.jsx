import React, { useEffect, useState } from 'react';
import { useFetchAPI } from '../hooks/useFetchAPI';

function ResidentCard({ url }) {
	const { fetchingData, data: resident, loading } = useFetchAPI('character');
	const [characters, setCharacters] = useState([url.length]);
	useEffect(() => {
		fetchingData(url);
	}, [url]);
	const statusClass =
		resident?.status === 'Alive'
			? 'Alive'
			: resident?.status === 'Dead'
			? 'Dead'
			: 'Unknown';
	const statusColor =
		resident?.status === 'Alive'
			? 'bg-green-500'
			: resident?.status === 'Dead'
			? 'bg-red-500'
			: 'bg-orange-400';

	if (loading) return <h1>Loading...</h1>;
	if (!resident) return <h1>Resident not found</h1>;
	return (
		<div className=" flex flex-col  bg-[#072226] p-4 rounded-lg shadow-md text-white gap-4  ">
			<div className="relative flex justify-center">
				<img src={resident?.image} alt={resident?.name} />
				<div className=" absolute inset-2">
					<span className=" text-white text-xs font-bold  rounded-full bg-gray-900 px-2 py-1 ">
						<span
							className={`${statusColor} inline-block w-1/25 h-1/25 rounded-full mr-1`}
						/>
						{statusClass}
					</span>
				</div>
			</div>
			<h2 className="card align-center text-center  font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl  ">
				{resident?.name}
			</h2>
			<div className="w-full h-1 bg-white mb-4 rounded"></div>

			<p>
				<b>-</b>Specie: {resident?.species}
			</p>
			<p>
				<b>-</b>Origin:{resident?.origin?.name}
			</p>
			<p>
				<b>-</b>Eppisodes where appear: {resident?.episode.length}{' '}
			</p>
		</div>
	);
}

export default ResidentCard;
