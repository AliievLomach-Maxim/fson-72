import { useEffect, useMemo, useState } from 'react'
import ToDo from '../ToDo/ToDo'
// import todo from '../../todo.json'
import { nanoid } from 'nanoid'

import React from 'react'
import FormCreate from './FormCreate'
import FormFilter from './FormFilter'
import { useSearchParams } from 'react-router-dom'

const ToDoList = () => {
	const [todoList, setTodoList] = useState([])
	const [filteredList, setFilteredList] = useState(null)
	const [isCreated, setIsCreated] = useState(false)
	const [isDeleted, setIsDeleted] = useState(false)
	const [searchParams, setSearchParams] = useSearchParams()

	// const filter = useMemo(
	// 	() => searchParams.get('filter') ?? '',
	// 	[searchParams]
	// )
	const { filter, page } = useMemo(
		() => Object.fromEntries([...searchParams]),
		[searchParams]
	)
	// console.log('page :>> ', page)
	// console.log('searchParams :>> ', Object.fromEntries([...searchParams]))

	useEffect(() => {
		const localData = localStorage.getItem('todo')
		if (localData) {
			setTodoList(JSON.parse(localData))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(todoList))
	}, [todoList])

	useEffect(() => {
		!filter && setSearchParams({})
	}, [filter, setSearchParams])

	useEffect(() => {
		todoList.length &&
			setFilteredList(
				todoList.filter((todo) =>
					todo.title
						.toLowerCase()
						.includes(filter ? filter.toLowerCase() : '')
				)
			)
	}, [filter, todoList])

	const handleCheck = (id) => {
		setTodoList((prev) => {
			return prev.map((el) =>
				el.id === id ? { ...el, completed: !el.completed } : el
			)
		})
	}

	const submit = (nameTodo) => {
		setTodoList((prev) => {
			return [
				...prev,
				{
					id: nanoid(),
					title: nameTodo,
					completed: false,
				},
			]
		})
		setIsCreated(true)
		setTimeout(() => {
			setIsCreated(false)
		}, 1500)
	}

	const handleDelete = (id) => {
		setTodoList((prev) => prev.filter((el) => el.id !== id))
		setIsDeleted(true)
		setTimeout(() => {
			setIsDeleted(false)
		}, 1500)
	}

	return (
		<>
			{isCreated && (
				<div className='alert alert-primary' role='alert'>
					Created to-do successfully!
				</div>
			)}
			{isDeleted && (
				<div className='alert alert-danger' role='alert'>
					Deleted to-do successfully!
				</div>
			)}
			<FormFilter filter={filter} setSearchParams={setSearchParams} />
			<FormCreate submit={submit} />
			<h1>My To-Do list</h1>
			{filteredList?.length > 0 && (
				<ul className='list-group list-group-flush'>
					{filteredList.map((todo) => (
						<ToDo
							handleDelete={handleDelete}
							check={handleCheck}
							key={todo.id}
							todo={todo}
						/>
					))}
				</ul>
			)}
		</>
	)
}

export default ToDoList

// class ToDoList extends Component {
// 	state = { todoList: [], nameTodo: '', isCreated: false, isDelete: false }

// 	componentDidMount() {
// 		const localData = localStorage.getItem('todo')
// 		if (localData) {
// 			this.setState({ todoList: JSON.parse(localData) })
// 		}
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevState.todoList !== this.state.todoList) {
// 			localStorage.setItem('todo', JSON.stringify(this.state.todoList))
// 		}
// 		if (prevState.todoList.length < this.state.todoList.length) {
// 			this.setState({ isCreated: true })
// 			setTimeout(() => {
// 				this.setState({ isCreated: false })
// 			}, 1500)
// 		}
// 		if (prevState.todoList.length > this.state.todoList.length) {
// 			this.setState({ isDelete: true })
// 			setTimeout(() => {
// 				this.setState({ isDelete: false })
// 			}, 1500)
// 		}
// 	}

// 	handleCheck = (id) => {
// 		this.setState((prev) => {
// 			return {
// 				todoList: prev.todoList.map((el) =>
// 					el.id === id ? { ...el, completed: !el.completed } : el
// 				),
// 			}
// 		})
// 	}

// 	handleChange = ({ target }) => {
// 		this.setState({ nameTodo: target.value })
// 	}

// 	handleSubmit = (e) => {
// 		e.preventDefault()

// 		this.setState((prev) => {
// 			return {
// 				todoList: [
// 					...prev.todoList,
// 					{
// 						id: nanoid(),
// 						title: this.state.nameTodo,
// 						completed: false,
// 					},
// 				],
// 			}
// 		})
// 		this.setState({ nameTodo: '' })
// 	}

// 	handleDelete = (id) => {
// 		this.setState((prev) => ({
// 			todoList: prev.todoList.filter((el) => el.id !== id),
// 		}))
// 	}

// 	render() {
// 		return (
// <>
// 	{this.state.isCreated && (
// 		<div className='alert alert-primary' role='alert'>
// 			Created to-do successfully!
// 		</div>
// 	)}
// 	{this.state.isDelete && (
// 		<div className='alert alert-danger' role='alert'>
// 			Deleted to-do successfully!
// 		</div>
// 	)}
// 	<form onSubmit={this.handleSubmit}>
// 		<div className='mb-3'>
// 			<label
// 				htmlFor='exampleInputEmail1'
// 				className='form-label'
// 			>
// 				To-Do Name:
// 			</label>
// 			<input
// 				name='nameTodo'
// 				type='text'
// 				className='form-control'
// 				onChange={this.handleChange}
// 				value={this.state.nameTodo}
// 			/>
// 		</div>
// 	</form>
// 	<h1>My To-Do list</h1>
// 	{this.state.todoList.length > 0 && (
// 		<ul className='list-group list-group-flush'>
// 			{this.state.todoList.map((todo) => (
// 				<ToDo
// 					handleDelete={this.handleDelete}
// 					check={this.handleCheck}
// 					key={todo.id}
// 					todo={todo}
// 				/>
// 			))}
// 		</ul>
// 	)}
// </>
// 		)
// 	}
// }

// export default ToDoList
