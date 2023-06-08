import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'

import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
// 	key: 'todo',
// 	storage,
// 	blacklist: ['counter'],
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
})
// export const store = configureStore({ reducer: persistedReducer })

export const persistor = persistStore(store)
