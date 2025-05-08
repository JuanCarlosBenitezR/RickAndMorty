function Pagination({ page, totalPages, prev, next }) {
	return (
		<div className="display flex gap-10 justify-center align-center">
			<button onClick={prev} disabled={page === 1}>
				prev
			</button>
			<p>
				{page} of {totalPages}
			</p>
			<button onClick={next} disabled={page === totalPages}>
				next
			</button>
		</div>
	);
}
export default Pagination;
