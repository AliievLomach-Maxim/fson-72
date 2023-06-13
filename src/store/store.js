import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'

// const customMiddleware = (store) => {
// 	return (next) => {
// 		return (action) => {
// 			if (typeof action === 'function') {
// 				action(store.dispatch)
// 				return
// 			}
// 			return next(action)
// 		}
// 	}
// }

export const store = configureStore({
	reducer,
	// middleware: [customMiddleware],
})
