// import { useContext } from 'react'
// import { ToggleContext } from './App'
import { useCustomContext } from './Context/Context'

const Alert = () => {
	// const result = useContext(ToggleContext)
	const result = useCustomContext()
	console.log('result :>> ', result)
	return (
		result.toggleValue && (
			<div className='alert alert-danger'>Messaaaaaggee</div>
		)
	)
}

export default Alert
