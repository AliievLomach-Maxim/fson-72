// import { useReducer, useState } from 'react'

// // function reducer(state, action) {
// // 	if (action.type === 'increment') {
// // 		return state + action.payload
// // 	} else if (action.type === 'decrement') {
// // 		return state - action.payload
// // 	}
// // }

// function reducer(state, action) {
// 	if (action.type === 'setName') {
// 		return {
// 			...state,
// 			name: action.payload,
// 		}
// 	} else if (action.type === 'setAge') {
// 		return {
// 			...state,
// 			age: action.payload,
// 		}
// 	} else if (action.type === 'createInfo') {
// 		return {
// 			...state,
// 			name: action.payload[0],
// 			age: action.payload[1],
// 			isDev: action.payload[2],
// 		}
// 	}
// }

// const Counter = () => {
// 	// const [userState, dispatch] = useReducer(reducer, {
// 	// 	name: '',
// 	// 	age: 0,
// 	// 	items: [],
// 	// 	isDev: true,
// 	// })

// 	// dispatch({ type: 'setName', payload: 'Alex' })
// 	// dispatch({ type: 'setAge', payload: 30 })
// 	// dispatch({ type: 'createInfo', payload: ['Alex', 30, true] })

// 	const [user, setUser] = useState({
// 		name: '',
// 		age: 0,
// 		items: [],
// 		isDev: true,
// 	})

// 	setUser((prev) => ({ ...prev, name: 'Alex' }))
// 	setUser((prev) => ({ ...prev, age: 30 }))
// 	setUser((prev) => ({ ...prev, name: 'Alex', age: 30, isDev: false }))

// 	return (
// 		<div className='position-absolute top-50 start-50 translate-middle'>
// 			<div
// 				className='card bg-dark text-white '
// 				style={{ width: '600px' }}
// 			>
// 				<div className='card-body'>
// 					<h5 className='card-title text-center fs-1'>Counter</h5>
// 					<p
// 						className='card-text  text-center'
// 						style={{ fontSize: '80px' }}
// 					>
// 						{total}
// 					</p>
// 					<div className='d-flex justify-content-center px-5'>
// 						<button
// 							onClick={handleClickIncrement}
// 							className='btn btn-outline-success me-5'
// 						>
// 							<i className='bi bi-plus-circle fs-1'></i>
// 						</button>
// 						<button
// 							className='btn  btn-outline-danger ms-5'
// 							onClick={handleClickDecrement}
// 						>
// 							<i className='bi bi-dash-circle fs-1'></i>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Counter

// // class Button extends PureComponent {
// // 	// shouldComponentUpdate(nextProps, nextState) {
// // 	// 	if (nextProps.user.name !== this.props.user.name) return true
// // 	// 	return false
// // 	// }
// // 	render() {
// // 		console.log('render BTN')
// // 		return (
// // 			<button
// // 				className='btn btn-outline-success me-5'
// // 				onClick={this.props.handleClickIncrement}
// // 			>
// // 				<i className='bi bi-plus-circle fs-1'></i>
// // 			</button>
// // 		)
// // 	}
// // }
// // class Counter extends Component {
// // 	state = { total: 0, items: [] }

// // 	handleClickIncrement = () =>
// // 		this.setState((prev) => ({
// // 			total: prev.total + 1,
// // 		}))

// // 	handleClickDecrement = () =>
// // 		this.setState((prev) => ({
// // 			total: prev.total - 1,
// // 		}))

// // 	render() {
// // 		console.log('Render')
// // 		return (
// // 			<div className='position-absolute top-50 start-50 translate-middle'>
// // 				<div
// // 					className='card bg-dark text-white '
// // 					style={{ width: '600px' }}
// // 				>
// // 					<div className='card-body'>
// // 						<h5 className='card-title text-center fs-1'>Counter</h5>
// // 						<p
// // 							className='card-text  text-center'
// // 							style={{ fontSize: '80px' }}
// // 						>
// // 							{this.state.total}
// // 						</p>
// // 						<div className='d-flex justify-content-center px-5'>
// // 							{/* <button
// // 								onClick={this.handleClickIncrement}
// // 								className='btn btn-outline-success me-5'
// // 							>
// // 								<i className='bi bi-plus-circle fs-1'></i>
// // 							</button> */}
// // 							<Button
// // 								user={{ name: 'Alex' }}
// // 								handleClickIncrement={this.handleClickIncrement}
// // 							/>
// // 							<button
// // 								className='btn  btn-outline-danger ms-5'
// // 								onClick={this.handleClickDecrement}
// // 							>
// // 								<i className='bi bi-dash-circle fs-1'></i>
// // 							</button>
// // 						</div>
// // 					</div>
// // 				</div>
// // 			</div>
// // 		)
// // 	}
// // }

// // export default Counter

// // // const Counter = () => {
// // // 	// const handleClick = (e) => {
// // // 	// 	total += 1
// // // 	// 	console.log('total :>> ', total)
// // // 	// }

// // // 	return (
// // // 		<div className='position-absolute top-50 start-50 translate-middle'>
// // // 			<div
// // // 				className='card bg-dark text-white '
// // // 				style={{ width: '600px' }}
// // // 			>
// // // 				<div className='card-body'>
// // // 					<h5 className='card-title text-center fs-1'>Counter</h5>
// // // 					<p
// // // 						className='card-text  text-center'
// // // 						style={{ fontSize: '80px' }}
// // // 					>
// // // 						{/* {total} */}
// // // 					</p>
// // // 					<div className='d-flex justify-content-center px-5'>
// // // 						<button
// // // 							// onClick={handleClick}
// // // 							className='btn btn-outline-success me-5'
// // // 						>
// // // 							<i className='bi bi-plus-circle fs-1'></i>
// // // 						</button>

// // // 						<button
// // // 							className='btn  btn-outline-danger ms-5'
// // // 							// onClick={handleClick}
// // // 						>
// // // 							<i className='bi bi-dash-circle fs-1'></i>
// // // 						</button>
// // // 					</div>
// // // 				</div>
// // // 			</div>
// // // 		</div>
// // // 	)
// // // }

// // // export default Counter
