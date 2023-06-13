import { counterReducer } from './counterWithSlice/counterSlice'
import { productsReducer } from './products/productsSlice'
import { todoReducer } from './todo/todoSlice'

export const reducer = {
	counter: counterReducer,
	todo: todoReducer,
	products: productsReducer,
}
