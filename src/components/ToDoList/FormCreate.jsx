import React, { useState } from 'react'

const FormCreate = ({ submit }) => {
	const [nameTodo, setNameTodo] = useState('')
	const handleChange = ({ target }) => {
		setNameTodo(target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		submit(nameTodo)
		setNameTodo('')
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='exampleInputEmail1' className='form-label'>
					To-Do Name:
				</label>
				<input
					name='nameTodo'
					type='text'
					className='form-control'
					onChange={handleChange}
					value={nameTodo}
				/>
			</div>
		</form>
	)
}

export default FormCreate
