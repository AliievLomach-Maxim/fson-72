import { createReducer } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { decrementAction, incrementAction, setStepAction } from './actions'

// export const counterReducer = (state = initialState, action) => {
// 	if (action.type === INCREMENT) {
// 		return { ...state, total: state.total + action.payload }
// 	}
// 	if (action.type === DECREMENT) {
// 		return { ...state, total: state.total - action.payload }
// 	}
// 	if (action.type === SETSTEP) {
// 		return { ...state, step: action.payload }
// 	}

// 	return state
// }

export const counterReducer = createReducer(initialState, {
	[incrementAction]: (state, { payload }) => {
		return { ...state, total: state.total + payload }
	},
	[decrementAction]: (state, { payload }) => {
		state.total -= payload
	},
	[setStepAction]: (state, { payload }) => {
		state.step = payload
	},
})
