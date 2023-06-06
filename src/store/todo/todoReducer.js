import { initialState } from './initialState'

export const todoReducer = (state = initialState, action) => {
	if (action.type === 'createTodo') {
		return { ...state }
	}
	if (action.type === 'updateTodo') {
		return { ...state }
	}
	return state
}
