import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { nanoid } from 'nanoid'

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		// create: {
		// 	reducer: (state, { payload }) => {
		// 		state.todoList.push(payload)
		// 	},
		// 	prepare: (value) => ({
		// 		payload: {
		// 			id: nanoid(),
		// 			completed: false,
		// 			title: value,
		// 		},
		// 	}),
		// },
		create: (state, { payload }) => {
			const objTodo = {
				id: nanoid(),
				completed: false,
				title: payload,
			}
			state.todoList.push(objTodo)
		},
	},
})

export const todoReducer = todoSlice.reducer
export const { create } = todoSlice.actions
