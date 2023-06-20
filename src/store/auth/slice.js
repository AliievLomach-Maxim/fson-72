import { createSlice } from '@reduxjs/toolkit'
import { getProfileThunk, loginThunk } from './thunks'

const initialState = {
	access_token: '',
	isLoading: false,
	error: '',
	profile: null,
}

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleRejected = (state, { error, payload }) => {
	state.isLoading = false
	state.error = payload ?? error.message
}

const handleFulfilled = (state, { payload }) => {
	state.isLoading = false
	state.access_token = payload.access_token
}

const handleFulfilledProfile = (state, { payload }) => {
	state.isLoading = false
	state.profile = payload
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logOut: (state) => {
			state.access_token = ''
			state.isLoading = false
			state.error = ''
			state.profile = null
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginThunk.fulfilled, handleFulfilled)
			.addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
			.addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
			.addMatcher(
				({ type }) => type.endsWith('/rejected'),
				handleRejected
			)
	},
})

export const authReducer = authSlice.reducer
export const { logOut } = authSlice.actions
