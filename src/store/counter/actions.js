import { createAction } from '@reduxjs/toolkit'

// export function decrementAction(value) {
// 	return { type: DECREMENT, payload: value }
// }

// export function incrementAction(value) {
// 	return { type: INCREMENT, payload: value }
// }

// export function setStepAction(value) {
// 	return { type: SETSTEP, payload: Number(value) }
// }

export const decrementAction = createAction('counter/decrement')

export const incrementAction = createAction('counter/increment')
export const setStepAction = createAction('counter/set-step')
