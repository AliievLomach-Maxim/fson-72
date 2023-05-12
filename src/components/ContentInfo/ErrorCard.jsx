import React from 'react'

const ErrorCard = ({ error }) => {
	return (
		<div className='alert alert-danger mt-3' role='alert'>
			{error}
		</div>
	)
}

export default ErrorCard
