import { Component, PureComponent } from 'react'

class Button extends PureComponent {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	if (
	// 		nextProps.handleClickIncrement !== this.props.handleClickIncrement
	// 	) {
	// 		return true
	// 	} else if (nextProps.user !== this.props.user) {
	// 		return true
	// 	}
	// 	return false
	// }

	render() {
		console.log('render BTN')
		return (
			<button
				className='btn btn-outline-success me-5'
				onClick={this.props.handleClickIncrement}
			>
				<i className='bi bi-plus-circle fs-1'></i>
			</button>
		)
	}
}
class Counter extends Component {
	state = { total: 0, items: [] }

	handleClickIncrement = () =>
		this.setState((prev) => ({
			total: prev.total + 1,
		}))

	handleClickDecrement = () =>
		this.setState((prev) => ({
			total: prev.total - 1,
		}))

	render() {
		console.log('Render')
		return (
			<div className='position-absolute top-50 start-50 translate-middle'>
				<div
					className='card bg-dark text-white '
					style={{ width: '600px' }}
				>
					<div className='card-body'>
						<h5 className='card-title text-center fs-1'>Counter</h5>
						<p
							className='card-text  text-center'
							style={{ fontSize: '80px' }}
						>
							{this.state.total}
						</p>
						<div className='d-flex justify-content-center px-5'>
							{/* <button
								onClick={this.handleClickIncrement}
								className='btn btn-outline-success me-5'
							>
								<i className='bi bi-plus-circle fs-1'></i>
							</button> */}
							<Button
								user={{
									name: 'Alex',
								}}
								handleClickIncrement={this.handleClickIncrement}
							/>
							<button
								className='btn  btn-outline-danger ms-5'
								onClick={this.handleClickDecrement}
							>
								<i className='bi bi-dash-circle fs-1'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Counter

// const Counter = () => {
// 	// const handleClick = (e) => {
// 	// 	total += 1
// 	// 	console.log('total :>> ', total)
// 	// }

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
// 						{/* {total} */}
// 					</p>
// 					<div className='d-flex justify-content-center px-5'>
// 						<button
// 							// onClick={handleClick}
// 							className='btn btn-outline-success me-5'
// 						>
// 							<i className='bi bi-plus-circle fs-1'></i>
// 						</button>

// 						<button
// 							className='btn  btn-outline-danger ms-5'
// 							// onClick={handleClick}
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
