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
			setError(error);
			console.log(error.response?.error?.message || error.message);
		} finally {
			setLoading(false);
		}
	};

	return { data, fetchingData, loading, error };
}
