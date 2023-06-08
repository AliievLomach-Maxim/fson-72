import { useDispatch, useSelector } from 'react-redux'
// import { decrementAction, incrementAction } from '../../store/counter/actions'
import { counterSelector } from '../../store/counter/selectors'
import { decrement, increment } from '../../store/counterWithSlice/counterSlice'

const Counter = () => {
	const { total, step } = useSelector(counterSelector)
	// const { total, step } = useSelector((state) => {
	// 	return [...state].sort((a, b) => a - b)
	// })
	const dispatch = useDispatch()

	const handleClickIncrement = () => {
		dispatch(increment(step))
	}

	const handleClickDecrement = () => {
		dispatch(decrement(step))
	}

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
						{total}
					</p>
					<div className='d-flex justify-content-center px-5'>
						<button
							onClick={handleClickIncrement}
							className='btn btn-outline-success me-5'
						>
							<i className='bi bi-plus-circle fs-1'></i>
						</button>
						<button
							className='btn  btn-outline-danger ms-5'
							onClick={handleClickDecrement}
						>
							<i className='bi bi-dash-circle fs-1'></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Counter
