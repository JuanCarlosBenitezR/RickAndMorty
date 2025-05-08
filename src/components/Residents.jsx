import React from 'react';
import ResidentCard from './ResidentCard';
import Pagination from './Pagination';
import { usePagination } from '../hooks/usePagination';

function Residents({ residents }) {
	const { page, totalPages, items, prev, next } = usePagination(residents);
	return (
		<>
			{residents && (
				<div className="grid grid-cols-5 gap-4  p-4 rounded-lg shadow-md ">
					{items.map((resident) => (
						<ResidentCard key={resident} url={resident} />
					))}
					{residents.length === 0 && <p>No residents found</p>}
				</div>
			)}
			<Pagination page={page} totalPages={totalPages} prev={prev} next={next} />
		</>
	);
}

export default Residents;
