import { DECREMENT, INCREMENT, SETSTEP } from "./types"

export function decrementAction(value) {
	return { type: DECREMENT, payload: value }
}

export function incrementAction(value) {
	return { type: INCREMENT, payload: value }
}

export function setStepAction(value) {
	return { type: SETSTEP, payload: Number(value) }
}
