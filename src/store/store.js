import { createStore } from 'redux'
import { reducer } from './reducer'

export const store = createStore(reducer)

// import { createStore } from 'redux'

// const reducer = (state, action) => {
// 	if (action.type === 'increment') {
// 		return { ...state, total: state.total + action.payload }
// 	}
// 	if (action.type === 'decrement') {
// 		return { ...state, total: state.total - action.payload }
// 	}
// 	if (action.type === 'setStep') {
// 		return { ...state, step: action.payload }
// 	}
// 	if (action.type === 'createTodo') {
// 		return { ...state}
// 	}
// 	if (action.type === 'updateTodo') {
// 		return { ...state}
// 	}

// 	return state
// }

// export const store = createStore(reducer, {
// 	total: 0,
// 	todo: [],
// 	users: null,
// 	step: 1,
// })
