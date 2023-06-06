import React from 'react'
import {
	Link,
	Navigate,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom'

const TodoDetails = () => {
	const { todoId } = useParams()
	const todos = JSON.parse(localStorage.getItem('todo'))
	const todo = todos.find((el) => el.id === todoId)

	const navigate = useNavigate()

	const location = useLocation()

	const handleClick = () => {
		navigate(location.state ? location.state : '/todo')
	}

	return (
		<>
			{!todo ? (
				<Navigate to='/' />
			) : (
				<>
					<button
						onClick={handleClick}
						className='btn btn-success m-2'
					>
						Back
					</button>
					{/* <Link
				to={location.state ? location.state : '/todo'}
				className='btn btn-success m-2'
			>
				Back
			</Link> */}
					<h1>{todo.title}</h1>
				</>
			)}
		</>
	)
}

export default TodoDetails
