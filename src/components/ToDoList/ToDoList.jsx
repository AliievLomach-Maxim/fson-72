import { Component } from 'react'
import ToDo from '../ToDo/ToDo'
// import todo from '../../todo.json'
import { nanoid } from 'nanoid'

class ToDoList extends Component {
	state = { todoList: [], nameTodo: '', isCreated: false, isDeleted: false }

	componentDidMount() {
		const localData = localStorage.getItem('todo')
		if (localData) this.setState({ todoList: JSON.parse(localData) })
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.todoList.length !== this.state.todoList.length) {
			localStorage.setItem('todo', JSON.stringify(this.state.todoList))
		}
		if (prevState.todoList.length > this.state.todoList.length) {
			this.setState({ isDeleted: true })
			setTimeout(() => {
				this.setState({ isDeleted: false })
			}, 1500)
		}
		if (prevState.todoList.length < this.state.todoList.length) {
			this.setState({ isCreated: true })
			setTimeout(() => {
				this.setState({ isCreated: false })
			}, 1500)
		}
	}

	handleCheck = (id) => {
		this.setState((prev) => {
			return {
				todoList: prev.todoList.map((el) =>
					el.id === id ? { ...el, completed: !el.completed } : el
				),
			}
		})
	}

	handleChange = ({ target }) => {
		this.setState({ nameTodo: target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.setState((prev) => {
			return {
				todoList: [
					...prev.todoList,
					{
						id: nanoid(),
						title: this.state.nameTodo,
						completed: false,
					},
				],
			}
		})
		this.setState({ nameTodo: '' })
	}

	handleDelete = (id) => {
		this.setState((prev) => ({
			todoList: prev.todoList.filter((el) => el.id !== id),
		}))
	}

	render() {
		return (
			<>
				{this.state.isCreated && (
					<div className='alert alert-primary' role='alert'>
						Created to-do successfully!
					</div>
				)}
				{this.state.isDeleted && (
					<div className='alert alert-danger' role='alert'>
						Deleted to-do successfully!
					</div>
				)}
				<form onSubmit={this.handleSubmit}>
					<div className='mb-3'>
						<label
							htmlFor='exampleInputEmail1'
							className='form-label'
						>
							To-Do Name:
						</label>
						<input
							name='nameTodo'
							type='text'
							className='form-control'
							onChange={this.handleChange}
							value={this.state.nameTodo}
						/>
					</div>
				</form>
				<h1>My To-Do list</h1>
				{this.state.todoList.length > 0 && (
					<ul className='list-group list-group-flush'>
						{this.state.todoList.map((todo) => (
							<ToDo
								handleDelete={this.handleDelete}
								check={this.handleCheck}
								key={todo.id}
								todo={todo}
							/>
						))}
					</ul>
				)}
			</>
		)
	}
}

export default ToDoList
