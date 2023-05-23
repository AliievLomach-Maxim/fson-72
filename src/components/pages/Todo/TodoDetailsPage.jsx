import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const TodoDetailsPage = () => {
	const { todoId } = useParams()
	const todos = JSON.parse(localStorage.getItem('todo'))
	const todo = todos.find((el) => el.id === todoId)

	return todo ? <h1>{todo.title}</h1> : <h1>Error 404</h1>
}

export default TodoDetailsPage
