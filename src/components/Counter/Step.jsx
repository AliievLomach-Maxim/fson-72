import { useDispatch, useSelector } from 'react-redux'
import { setStepAction } from '../../store/counter/actions'

const Step = () => {
	const { step } = useSelector((state) => state.counter)
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const { value } = e.target.elements.step
		dispatch(setStepAction(value))
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='d-flex mt-2 mx-auto w-25'
			role='search'
		>
			<input
				className='form-control me-2 '
				type='number'
				name='step'
				placeholder='step'
			/>
			<button className='btn btn-outline-success' type='submit'>
				Set Step
			</button>
		</form>
	)
}

export default Step
