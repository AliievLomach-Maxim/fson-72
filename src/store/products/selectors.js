// import { createSelector } from '@reduxjs/toolkit'

// const inputSelector1 = (state) => state.comments
// const inputSelector2 = (state) => state.products
// const inputSelector3 = (state) => state.users

// const selector = createSelector(
// 	// Масив вхідних селекторів
// 	[inputSelector1, inputSelector2, inputSelector3],
// 	// Функція перетворювач
// 	(result1, result2) => {
// 		result1.filter((el) => el !== result2 && !el.includes())
// 		// Виконуємо обчислення та повертаємо результат
// 	}
// )

export const selectSortedProducts = (state) => {
	return state.products.products.toSorted((a, b) => {
		console.log('sort')
		return a.price - b.price
	})
}
export const selectProducts = (state) => state.products
