import { createReducer } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { createTodoAction } from './actions'

// export const todoReducer = (state = initialState, action) => {
// 	if (action.type === 'createTodo') {
// 		return { ...state }
// 	}
// 	if (action.type === 'updateTodo') {
// 		return { ...state }
// 	}
// 	return state
// }

export const todoReducer = createReducer(initialState, {
	[createTodoAction]: (state, { payload }) => {
		state.todoList.push(payload)
	},
})
