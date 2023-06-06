// import { useContext } from 'react'
// import { ToggleContext } from './App'
import { useCustomContext } from './Context/Context'

const Main = () => {
	// const result = useContext(ToggleContext)
	const result = useCustomContext()
	return (
		<div>
			<h1>Hello Context</h1>
			<button onClick={result.setToggleFn} className='btn btn-success'>
				Open Alert
			</button>
		</div>
	)
}

export default Main
