// import { useContext } from 'react'
// import { ToggleContext } from './App'
import { useRef } from 'react'
import { useCustomContext } from './Context/Context'

const Main = () => {
	// const result = useContext(ToggleContext)
	const result = useCustomContext()

	const refInput = useRef()

	return (
		<div>
			<h1>Hello Context</h1>
			<input ref={refInput} type='text' />
			<button
				onClick={() => refInput.current.focus()}
				className='btn btn-success'
			>
				Focus input
			</button>
			<button onClick={result.toggleFn} className='btn btn-success'>
				Open Alert
			</button>
		</div>
	)
}

export default Main
