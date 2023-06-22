import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'
import { productsApi } from './productsApi'
import persistStore from 'redux-persist/es/persistStore'

export const store = configureStore({
	reducer,
	middleware: (defaultMiddleware) =>
		defaultMiddleware().concat(productsApi.middleware),
})
export const persistor = persistStore(store)
