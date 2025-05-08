import { useEffect, useState } from 'react';
import { useFetchAPI } from './hooks/useFetchAPI';
import { getRandomLocationById } from './lib/utils';
import Header from './components/Header';
import Location from './components/Location';
import Residents from './components/Residents';
import Search from './components/Search';
import './App.css';

const base_URL = 'https://rickandmortyapi.com/api/location/';
function App() {
	const { fetchingData, data: location, loading } = useFetchAPI();
	const [locationId, setLocationId] = useState(getRandomLocationById());

	useEffect(() => {
		fetchingData(`${base_URL}${locationId}`);
	}, [locationId]);
	return (
		<>
			<Header />
			<Search onSearch={setLocationId} />
			{loading ? (
				<h1>Loading...</h1>
			) : (
				location && <Location location={location} />
			)}
			{location && <Residents residents={location.residents} />}
		</>
	);
}

export default App;
