import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { getProductsThunk, getProductDetailsThunk } from './thunks'

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleFulfilledProducts = (state, { payload }) => {
	state.isLoading = false
	state.products = payload
}
const handleFulfilledProductDetails = (state, { payload }) => {
	state.isLoading = false
	state.productDetails = payload
}

const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getProductsThunk.fulfilled, handleFulfilledProducts)
			.addCase(
				getProductDetailsThunk.fulfilled,
				handleFulfilledProductDetails
			)
			.addMatcher((action) => {
				action.type.endsWith('/pending')
			}, handlePending)
			.addMatcher((action) => {
				action.type.endsWith('/rejected')
			}, handleRejected)
		// // .addCase(getProductsThunk.pending, handlePending)
		// .addCase(getProductsThunk.fulfilled, handleFulfilledProducts)
		// // .addCase(getProductsThunk.rejected, handleRejected)
		// // .addCase(getProductDetailsThunk.pending, handlePending)
		// .addCase(
		// 	getProductDetailsThunk.fulfilled,
		// 	handleFulfilledProductDetails
		// )
		// // .addCase(getProductDetailsThunk.rejected, handleRejected)
		// .addMatcher((action) => {
		// 	action.type.endsWith('/pending')
		// }, handlePending)
		// .addMatcher((action) => {
		// 	action.type.endsWith('/rejected')
		// }, handleRejected)
		// .addMatcher(
		// 	isAnyOf([
		// 		getProductsThunk.pending,
		// 		getProductDetailsThunk.pending,
		// 	]),
		// 	handlePending
		// )
	},
})

export const productsReducer = productsSlice.reducer

// const productsSlice = createSlice({
// 	name: 'products',
// 	initialState,
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(getProductsThunk.pending, (state) => {
// 				state.isLoading = true
// 				state.error = ''
// 			})
// 			.addCase(getProductsThunk.fulfilled, (state, { payload }) => {
// 				state.isLoading = false
// 				state.products = payload
// 			})
// 			.addCase(getProductsThunk.rejected, (state, { payload }) => {
// 				state.isLoading = false
// 				state.error = payload
// 			})
// 	},
// 	// extraReducers: {
// 	// 	[getProductsThunk.pending]: (state) => {
// 	// 		state.isLoading = true
// 	// 		state.error = ''
// 	// 	},
// 	// 	[getProductsThunk.fulfilled]: (state, { payload }) => {
// 	// 		state.isLoading = false
// 	// 		state.products = payload
// 	// 	},
// 	// 	[getProductsThunk.rejected]: (state, { payload }) => {
// 	// 		state.isLoading = false
// 	// 		state.error = payload
// 	// 	},
// 	// },
// 	// reducers: {
// 	// 	fetching: (state) => {
// 	// 		state.isLoading = true
// 	// 	},
// 	// 	fetchSuccess: (state, { payload }) => {
// 	// 		state.isLoading = false
// 	// 		state.products = payload
// 	// 		state.error = ''
// 	// 	},
// 	// 	fetchError: (state, { payload }) => {
// 	// 		state.isLoading = false
// 	// 		state.error = payload
// 	// 	},
// 	// },
// })

// export const productsReducer = productsSlice.reducer

// export const getProductsThunk = () => {
// 	return async (dispatch) => {
// 		dispatch(productsSlice.actions.fetching())
// 		try {
// 			const data = await getProducts()
// 			dispatch(productsSlice.actions.fetchSuccess(data))
// 		} catch (error) {
// 			dispatch(productsSlice.actions.fetchError(error))
// 		}
// 	}
// }
