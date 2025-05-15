import { useEffect, useState } from 'react';
import { useFetchAPI } from './hooks/useFetchAPI';
import { getRandomLocationById } from './lib/utils';
import Header from './components/Header';
import Location from './components/Location';
import Residents from './components/Residents';
import Search from './components/Search';
import './App.css';
import Errors from './components/Errors';

const base_URL = 'https://rickandmortyapi.com/api/location/?name=';
function App() {
	const {
		fetchingData,
		data: location,
		loading,
		error,
	} = useFetchAPI('location');
	const [locationId, setLocationId] = useState('citadel');
	const [errorSearch, seterrorSearch] = useState(null);

	useEffect(() => {
		fetchingData(`${base_URL}${locationId}`);
	}, [locationId]);
	return (
		<div className="pantalla text-base md:text-lg lg:text-xl xl:text-2xl ">
			<Header />
			<Search onSearch={setLocationId} errorSearch={seterrorSearch} />
			{loading ? (
				<h1>Loading...</h1>
			) : (
				location && !error && !errorSearch && <Location location={location} />
			)}
			{location && !error && !errorSearch && (
				<Residents residents={location.residents} />
			)}
			{errorSearch && <Errors error={errorSearch} />}
			{error && <Errors error={error} />}
		</div>
	);
}

export default App;
