import { createContext, useContext, useState } from 'react'

const ToggleContext = createContext()

export const useCustomContext = () => useContext(ToggleContext)

const Context = ({ children }) => {
	const [toggle, setToggle] = useState(false)

	return (
		<ToggleContext.Provider
			value={{
				toggleValue: toggle,
				toggleFn: () => setToggle((prev) => !prev),
			}}
		>
			{children}
		</ToggleContext.Provider>
	)
}

export default Context
