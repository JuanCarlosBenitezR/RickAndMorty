import React, { useEffect, useState, useRef } from 'react';
import SearchLocations from '../hooks/SearchLocations';

function Search({ onSearch, errorSearch }) {
	const [locations, setLocations] = useState([]);
	const inputRef = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		const locationId = inputRef.current?.value;

		const value = inputRef.current.value.trim();
		if (value.length === 0) {
			errorSearch('Please enter a location ID');
			return;
		}
		onSearch(locationId);
		inputRef.current.value = '';
		errorSearch('');
	};

	return (
		<div>
			<SearchLocations setLocations={setLocations} />
			<div className="flex flex-col-2 items-center fit-content-center justify-center bg-[#082227] p-4 ">
				<input
					list="locations"
					name="location"
					placeholder="Search for a location..."
					ref={inputRef}
					onChange={() => errorSearch('')}
					className="border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-white bg-gray-800"
				/>
				<datalist id="locations">
					{locations.map((loc) => (
						<option key={loc.name} value={loc.name} />
					))}
				</datalist>
				<button
					onClick={handleSubmit}
					className="bg-green-500 text-white p-2 rounded-lg shadow-md hover:bg-green-600"
				>
					Search
				</button>

				{/* <input
				type="text"
				placeholder="Search for a location..."
				ref={inputRef}
			/>
			<button onClick={handleSubmit}>Search</button> */}
			</div>
		</div>
	);
}

export default Search;
