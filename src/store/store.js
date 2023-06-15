import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'
import { productsApi } from './productsApi'

export const store = configureStore({
	reducer,
	middleware: (defaultMiddleware) =>
		defaultMiddleware().concat(productsApi.middleware),
})
