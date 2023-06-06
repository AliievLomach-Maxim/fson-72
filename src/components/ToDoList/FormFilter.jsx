const FormFilter = ({ setSearchParams, filter }) => {
	const handleChange = ({ target }) => {
		setSearchParams({ filter: target.value })
	}

	return (
		<form>
			<div className='mb-3'>
				<label htmlFor='exampleInputEmail1' className='form-label'>
					Filter to-do:
				</label>
				<input
					name='filter'
					type='text'
					className='form-control'
					onChange={handleChange}
					value={filter || ''}
				/>
			</div>
		</form>
	)
}

export default FormFilter
