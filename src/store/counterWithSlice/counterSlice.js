import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	total: 0,
	step: 1,
}

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, { payload }) => {
			return { ...state, total: state.total + payload }
		},
		decrement: (state, { payload }) => {
			state.total -= payload
		},
		setStep: (state, { payload }) => {
			state.step = payload
		},
	},
})

export const counterReducer = counterSlice.reducer

export const { increment, decrement, setStep } = counterSlice.actions
