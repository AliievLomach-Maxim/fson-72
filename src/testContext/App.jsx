// import { createContext, useState } from 'react'
import Alert from './Alert'
import Context from './Context/Context'
import Main from './Main'

// export const ToggleContext = createContext()

const App = () => {
	// const [toggle, setToggle] = useState(false)
	return (
		<div className='container pt-2'>
			{/* <ToggleContext.Provider
				value={{
					toggleValue: toggle,
					toggleFn: () => setToggle((prev) => !prev),
				}}
			> */}
			<Context>
				<Alert />
				<Main />
			</Context>
			{/* </ToggleContext.Provider> */}
		</div>
	)
}

export default App
