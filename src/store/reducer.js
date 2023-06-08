// import { combineReducers } from 'redux'
import { counterReducer } from './counterWithSlice/counterSlice'
// import { todoReducer } from './todo/todoReducer'
// import { counterReducer } from './counter/counterReducer'
import { todoReducer } from './todo/todoSlice'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfigTodo = {
	key: 'todo',
	storage,
}

const persistedReducerTodo = persistReducer(persistConfigTodo, todoReducer)

const persistConfigCounter = {
	key: 'counter',
	storage,
}

const persistedReducerCounter = persistReducer(
	persistConfigCounter,
	counterReducer
)

export const reducer = {
	counter: persistedReducerCounter,
	todo: persistedReducerTodo,
}

const user = {
	name: 'Alex',
	getName: function () {
		// ...some code
	},
	getName2: () => {},
	getName3() {
		// ...some code
	},
}
