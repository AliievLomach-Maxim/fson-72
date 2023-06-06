import { initialState } from './initialState'
import { DECREMENT, INCREMENT, SETSTEP } from './types'

export const counterReducer = (state = initialState, action) => {
	if (action.type === INCREMENT) {
		return { ...state, total: state.total + action.payload }
	}
	if (action.type === DECREMENT) {
		return { ...state, total: state.total - action.payload }
	}
	if (action.type === SETSTEP) {
		return { ...state, step: action.payload }
	}

	return state
}
