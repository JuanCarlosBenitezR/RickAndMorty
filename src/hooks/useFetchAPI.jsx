import { useState } from 'react';
import axios from 'axios';
export function useFetchAPI() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchingData = async (url) => {
		setLoading(true);
		setError(null);
		try {
			const { data } = await axios.get(url);
			setData(data);
		} catch (error) {
			if (error.response?.status === 404) {
				setError('Location not found');
			} else if (error.response?.status === 400) {
				setError('Bad request');
			} else if (error.response?.status === 401) {
				setError('Unauthorized');
			} else if (error.response?.status === 500) {
				setError('Internal Server Error');
			} else if (error.response?.status === 429) {
				setError('Too Many Requests, try later');
			} else {
				setError('Unknow error');
			}
		} finally {
			setLoading(false);
		}
	};
	return { data, fetchingData, loading, error };
}
