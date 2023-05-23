import React from 'react'
import { Link } from 'react-router-dom'

const ToDo = ({ todo, check, handleDelete }) => {
	function handleCheck() {
		check(todo.id)
	}
	return (
		<li className='list-group-item'>
			<div className='row justify-content-between'>
				<div className='col-10'>
					<input
						className='form-check-input me-2'
						type='checkbox'
						onChange={handleCheck}
						checked={todo.completed}
					/>
					<Link to={todo.id}>{todo.title}</Link>
				</div>
				<div className='col'>
					<button
						type='button'
						className='btn-close'
						aria-label='Close'
						onClick={() => handleDelete(todo.id)}
					></button>
				</div>
			</div>
		</li>
	)
}

export default ToDo
