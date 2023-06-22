import { authReducer } from './auth/slice'
import { counterReducer } from './counterWithSlice/counterSlice'
import { productsReducer } from './products/productsSlice'
import { productsApi } from './productsApi'
import { todoReducer } from './todo/todoSlice'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
	key: 'token',
	storage,
	whitelist: ['access_token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const reducer = {
	counter: counterReducer,
	todo: todoReducer,
	products: productsReducer,
	[productsApi.reducerPath]: productsApi.reducer,
	auth: persistedReducer,
}
