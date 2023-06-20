import { authReducer } from './auth/slice'
import { counterReducer } from './counterWithSlice/counterSlice'
import { productsReducer } from './products/productsSlice'
import { productsApi } from './productsApi'
import { todoReducer } from './todo/todoSlice'

export const reducer = {
	counter: counterReducer,
	todo: todoReducer,
	products: productsReducer,
	[productsApi.reducerPath]: productsApi.reducer,
	auth: authReducer,
}
