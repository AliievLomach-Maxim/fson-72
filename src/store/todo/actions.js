import { createAction, nanoid } from '@reduxjs/toolkit'

export const createTodoAction = createAction('todo/create', (value) => ({
	payload: {
		id: nanoid(),
		completed: false,
		title: value,
	},
}))
