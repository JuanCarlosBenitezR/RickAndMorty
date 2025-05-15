import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SearchLocations({ setLocations }) {
	useEffect(() => {
		const getAllLocations = async () => {
			try {
				const firstPageRes = await axios.get(
					'https://rickandmortyapi.com/api/location',
				);
				const totalPages = firstPageRes.data.info.pages;
				let all = [...firstPageRes.data.results];

				const requests = [];
				for (let i = 2; i <= totalPages; i++) {
					requests.push(
						axios.get(`https://rickandmortyapi.com/api/location?page=${i}`),
					);
				}

				const responses = await Promise.all(requests);
				responses.forEach((res) => {
					all = all.concat(res.data.results);
				});

				setLocations(all);
			} catch (error) {
			} finally {
			}
		};

		getAllLocations();
	}, []);
	return <></>;
}
export default SearchLocations;
